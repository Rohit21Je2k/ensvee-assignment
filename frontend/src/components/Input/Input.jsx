import React from "react";

import "./Input.css";

export default function Input(props) {
  const {
    label,
    type,
    name,
    placeholder,
    required,
    className,
    value,
    setFormValues,
    autocomplete,
  } = props;
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prevValues) => {
      prevValues[name] = value;
      return { ...prevValues };
    });
  };
  return (
    <div className={`input-container ${className}`}>
      <label className="input-container__label">{label}</label>
      <input
        className="input-container__input"
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={handleInputChange}
        value={value}
        autoComplete={autocomplete}
      />
    </div>
  );
}
