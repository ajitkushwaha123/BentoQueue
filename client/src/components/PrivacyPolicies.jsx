import React from "react";

const privacyPolicy = [
  {
    title: "Introduction",
    content: `
      Welcome to <b>BentoQueue!</b> Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or interact with our services.
    `,
  },
  {
    title: "Information We Collect",
    content: `
      We collect information you provide directly, such as your <b>name, email address, phone number,</b> and delivery details when placing an order. We may also automatically collect technical data like your <b>IP address, browser type,</b> and site usage information.
    `,
  },
  {
    title: "How We Use Your Information",
    content: `
      We use your information to <b>process your orders, improve our website,</b> provide customer support, and keep you informed about offers, new products, or important updates.
    `,
  },
  {
    title: "Sharing Your Information",
    content: `
      We do not <b>sell or rent</b> your personal information. We may share your data with <b>reliable partners</b> like delivery services and payment processors to fulfill your order efficiently.
    `,
  },
  {
    title: "Data Security",
    content: `
      We take <b>strong measures</b> to protect your data against unauthorized access, misuse, or loss. While we strive for the highest standards, no system can guarantee complete security.
    `,
  },
  {
    title: "Cookies and Tracking",
    content: `
      Our website uses <b>cookies</b> to enhance your shopping experience and analyze performance. You can manage or disable cookies in your browser settings, but some features may be affected.
    `,
  },
  {
    title: "Your Rights",
    content: `
      You have the right to <b>access, modify, or delete</b> your personal data. To request any changes, please reach out to us at <b>ajitkushwahacse@gmail.com</b>.
    `,
  },
  {
    title: "Changes to this Privacy Policy",
    content: `
      We may occasionally update this Privacy Policy. Changes will be posted here with the latest revision date. We recommend reviewing it regularly to stay informed.
    `,
  },
  {
    title: "Contact Us",
    content: `
      For any questions or concerns regarding this policy, contact us at:<br>
      <b>Email:</b> ajitkushwahacse@gmail.com<br>
      <b>Phone:</b> +91 8178739633<br>
      <b>Address:</b> Near mohalla clinic , rajokari, New Delhi - 110001
    `,
  },
];

const PrivacyPolicies = () => {
  return (
    <div className="w-full">
      <div className="bg-indigo-500 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">PRIVACY POLICY</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px]">
        {privacyPolicy.map((policy, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333]">
              {policy.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: policy.content }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicies;
