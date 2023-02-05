import React from "react";
import { useField } from "formik";

const FormInput = ({ type, name, icon, onChange, placeholder, onClick }) => {
  const [field, { error, touched }] = useField({ type: type, name: name });
  
  return (
    <div className="w-full">
      <div
        className={`${
          icon ? "flex items-center px-4" : null
        } w-full h-51 bg-grey-1 rounded-[5px]`}
      >
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...field}
          className={`${
            icon ? 'pl-0' : 'pl-4'
          } w-full h-full bg-transparent outline-0 placeholder:capitalize text-sm text-dark-3`}
        />
        <span onClick={onClick}>{icon ? icon : null}</span>
      </div>
      {error && touched ? <p className="text-sm font-medium text-dark-1">{error}</p> : null}
    </div>
  );
};

export default FormInput;
