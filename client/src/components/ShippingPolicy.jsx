import React from "react";

const data = [
  {
    title: "Order Processing & Delivery Timeline",
    content: `
      1. <b>Order Processing:</b> Orders are typically processed within <b>1–2 business days</b> after successful payment.<br>
      2. <b>Shipping Time:</b> Once dispatched, delivery usually takes <b>3–7 business days</b>, depending on your location.<br>
      3. <b>Tracking:</b> You will receive a tracking link via email or WhatsApp as soon as your package is shipped.
    `,
  },
  {
    title: "Shipping & Packaging",
    content: `
      - <b>Secure Packaging:</b> All BentoQueue products are carefully packed to avoid damage during transit.<br>
      - <b>Shipping Partners:</b> We work with trusted courier services to ensure timely and reliable delivery across India.
    `,
  },
  {
    title: "Delivery Attempts",
    content: `
      - If you're unavailable at the time of delivery, the courier will attempt to deliver up to <b>2 more times</b>.<br>
      - If the package remains undelivered, it will be returned to us. Additional charges may apply for re-shipping.
    `,
  },
  {
    title: "Customer Responsibilities",
    content: `
      - <b>Provide accurate shipping details</b> at checkout to avoid delays or delivery failures.<br>
      - <b>Ensure someone is available</b> to receive the package at the provided address during delivery hours.
    `,
  },
  {
    title: "Returns and Cancellations",
    content: `
      - You may cancel an order <b>before it is dispatched</b> by contacting us via phone or email.<br>
      - Once dispatched, cancellations are not possible. Please refer to our <a href="/return-policy" class="text-blue-600 underline">Return Policy</a> for details on eligible returns.
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions or concerns regarding your order or delivery, reach out to us:<br>
      - <b>Email:</b> ajitkushwahacse@gmail.com<br>
      - <b>Phone:</b> +91 8178739633<br>
      - <b>Address:</b> Near Mohalla Clinic, Rajokari, New Delhi - 110001
    `,
  },
];

const ShippingPolicy = () => {
  return (
    <div className="w-full">
      <div className="bg-indigo-500 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">Shipping and Delivery Policy</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px]">
        {data.map((item, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333]">
              {item.title}
            </h2>
            <p
              className="text-[17px] leading-7"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShippingPolicy;
