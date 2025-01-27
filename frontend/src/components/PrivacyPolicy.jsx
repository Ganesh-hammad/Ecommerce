import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">
        Welcome to FOREVER! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our e-commerce platform.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="text-gray-600">
          When you visit our website, we may collect the following information:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Personal details like name, email address, and phone number.</li>
          <li>Shipping and billing address for order fulfillment.</li>
          <li>Payment information (securely processed through third-party services).</li>
          <li>Browser cookies and usage data to enhance your experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-600">
          The information we collect is used to:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Process and fulfill your orders.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send updates about your orders or promotional offers.</li>
          <li>Improve our website functionality and user experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p className="text-gray-600">
          We do not sell or rent your personal information to third parties. However, we may share your data with trusted partners, such as:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li>Payment processors to complete transactions.</li>
          <li>Shipping providers to deliver your orders.</li>
          <li>Analytics services to improve our platform.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Security of Your Data</h2>
        <p className="text-gray-600">
          We take appropriate measures to secure your data against unauthorized access, alteration, or destruction. Our website uses SSL encryption to protect sensitive information during transmission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p className="text-gray-600">
          You have the right to access, update, or delete your personal data. If you wish to exercise these rights, please contact us at ganeshhammad837@gmail.com.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
        </p>
        <p className="text-gray-600 font-medium">ganeshhammad837@gmail.com</p>
      </section>

    </div>
  );
};

export default PrivacyPolicy;
