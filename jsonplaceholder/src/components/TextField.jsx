import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <div className="">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
    </div>
  );
};

export default TextField;
