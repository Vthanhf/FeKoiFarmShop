// eslint-disable-next-line no-unused-vars
import React from "react";
import "./faqs.css";

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="faq-image">
        <img
          src="https://www.jaxors.com/wp-content/uploads/2023/05/whay-choose-us.png"
          alt="FAQ Illustration"
        />
      </div>
      <div className="faq-content">
        <h1>Chúng tôi bán cá Koi chất lượng.</h1>
        <p>Trải nghiệm câu khác hàng là trên hết</p>
        <p>Hello.</p>
        <div className="faq-list">
          {Array(6)
            .fill()
            .map((_, index) => (
              <div className="faq-item" key={index}>
                <span>
                  Tại sao lại lựa chọn cá Koi ở đây?
                </span>
                <button className="faq-toggle">+</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
