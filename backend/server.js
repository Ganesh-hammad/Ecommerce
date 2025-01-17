import express from 'express';
import cors from 'cors';
import 'dotenv/config' 
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';


const app = express();
const port = process.env.PORT || 4000;
 
//middleware
app.use(express.json());
app.use(cors());
connectDB();
connectCloudinary();

app.get('/', (req, res)=>{
   res.send("api working ganesh hello guy")
});

app.listen(port, ()=>{
    console.log(`Server Started on Port: ${port}`);
})
