import React from "react";

const FormInput2 = ({ type, name, icon, onChange, placeholder, onClick }) => {
  
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
          className={`${
            icon ? 'pl-0' : 'pl-4'
          } w-full h-full bg-transparent outline-0 placeholder:capitalize text-sm text-dark-3`}
        />
        <span onClick={onClick}>{icon ? icon : null}</span>
      </div>
    </div>
  );
};

export default FormInput2;
