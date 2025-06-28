import React from "react";

const returnPolicy = [
  {
    title: "Eligibility for Returns and Refunds",
    content: `
      You may request a return or refund under the following conditions: <br />
      1. If you receive a <b>damaged</b> or <b>defective</b> lunch box, and notify us within <b>48 hours</b> of delivery. <br />
      2. If you receive an <b>incorrect product</b> and report it within <b>48 hours</b>. <br />
      3. The return is initiated within <b>7 days</b> of delivery and the item is unused, in its original packaging, and resalable condition.
    `,
  },
  {
    title: "Non-Returnable / Non-Refundable Cases",
    content: `
      We are unable to accept returns or provide refunds in the following scenarios: <br />
      1. If the product has been <b>used, washed, or damaged</b> after delivery. <br />
      2. If the return request is made <b>after 7 days</b> of delivery. <br />
      3. If the item was purchased as part of <b>clearance, combo offers, or special discounts</b>. <br />
      4. If the reason is a simple <b>change of mind</b> after receiving the correct and undamaged product.
    `,
  },
  {
    title: "Refund Process",
    content: `
      1. <b>Request Submission</b>: Email us at <b>ajitkushwahacse@gmail.com</b> with your order ID, issue description, and photos/videos (if applicable). <br />
      2. <b>Review</b>: Our team will assess the request within <b>2–3 business days</b>. <br />
      3. <b>Approval</b>: Once approved and the item is received back (if applicable), refunds will be processed within <b>7–10 business days</b> to the original payment method.
    `,
  },
  {
    title: "Cancellation Policy",
    content: `
      - Orders can only be cancelled <b>before dispatch</b>. <br />
      - Once the product is dispatched, cancellation is not possible. <br />
      - To cancel, contact us immediately at <b>+91 8178739633</b> or email <b>ajitkushwahacse@gmail.com</b>.
    `,
  },
  {
    title: "Contact Us",
    content: `
      For any questions or concerns about our Return and Refund Policy, reach out to us: <br />
      1. <b>Email</b>: ajitkushwahacse@gmail.com <br />
      2. <b>Phone</b>: +91 8178739633 <br />
      3. <b>Address</b>: Near Mohalla Clinic, Rajokari, New Delhi - 110001 <br />
      4. <b>Website</b>: <a href="https://bento-queue.vercel.app/" class="text-blue-600 underline" target="_blank" rel="noopener noreferrer">bento-queue.vercel.app</a>
    `,
  },
];

const ReturnPolicy = () => {
  return (
    <div className="w-full">
      <div className="bg-indigo-500 text-white p-0.5 sm:text-[17px] md:text-[1.8rem] text-center w-full">
        <p className="font-bold">Return and Refund Policy</p>
      </div>

      <div className="w-full p-[20px] md:px-[120px] md:py-[50px]">
        {returnPolicy.map((data, index) => (
          <div key={index} className="py-4 border-b-2 border-gray-50">
            <h2 className="text-[30px] pb-2 font-extrabold text-[#333]">
              {data.title}
            </h2>
            <p
              className="text-[17px] leading-7"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReturnPolicy;
