import Razorpay from "razorpay";
import orderModel from "../models/order.model.js";
import userModel from "../models/user.model.js";
// global variables
const currency = 'inr'
const deliveryCharge = 10;

// gateway initialize
const razorpayInstance = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY
})

// placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const {userId, items, address, amount} = req.body;

        const orderData = {
            userId, 
            items, 
            address, 
            amount,
            paymentMethod:"COD",
            payment:false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, {cartData:{}});
        res.json({success:true, message:"Order Placed"});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }

}


// placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Razorpay",
            payments: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        const options = {
           amount: amount*100,
           currency:currency.toUpperCase(),
           receipt: newOrder._id.toString(),
        }
        await razorpayInstance.orders.create(options, (error, order)=>{
            if(error){
                console.log(error);
                return res.json({success:false, message: error})
            }
            return res.json({success:true, order})
        })

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

const verifyRazorpay = async (req, res) => {
    try {
        const{userId, razorpay_order_id} = req.body
        const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
        if(orderInfo.status === "paid"){
            await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true});//(orderInfo.receipt = _id)
            await userModel.findByIdAndUpdate(userId, {cartData:{}});
            res.json({success:true, message: "Payment Successful"})
        }else{
            res.json({success:false, message: "Payment Failed"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// all orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// user Orders Data for admin panel
const userOrders = async (req, res) => {
    try {
        const {userId} =  req.body;
        const orders = await orderModel.find({userId});
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// update order status from admin panel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, {status});
        res.json({success:true, message:'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export{placeOrder, placeOrderRazorpay, verifyRazorpay, allOrders, userOrders, updateStatus}
