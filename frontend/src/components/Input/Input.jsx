import React from "react";

import "./Input.css";

export default function Input(props) {
  const { label, type, placeholder, required, className } = props;
  return (
    <div className={`input-container ${className}`}>
      <label className="input-container__label">{label}</label>
      <input
        className="input-container__input"
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
