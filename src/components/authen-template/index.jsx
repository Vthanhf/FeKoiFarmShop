/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";

// eslint-disable-next-line react/prop-types
function AuthenTemplate({ children }) {
  return (
    <div className="authen-template">
      <div className="authen-template-right">
        <div className="authen-template_form">{children}</div>
        <div className="image"></div>
      </div>
      <div className="authen-template-left"></div>
    </div>
  );
}

export default AuthenTemplate;
