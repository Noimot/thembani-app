import React from "react";
import spinner from "../../assets/images/spinner.gif"

const Button = ({btnText, btnType, loading, className, handleClick,}) => {
  return (
    <button
      onClick={handleClick}
      type={btnType}
      className={`${className} w-full h-full rounded-[5px] text-white text-center bg-green-1 text-lg flex items-center gap-x-2 justify-center`}
    >
      {loading ? <span className="h-10 w-10"><img src={spinner} alt="" /></span> : null}
      <span>{btnText}</span>
    </button>
  );
};

export default Button;
