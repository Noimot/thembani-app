import React from 'react'
import cancelIcon from "../../assets/images/cancel-icon.svg";

const StatusUpdate = ({text, className}) => {
  return (
    <div className={`${className} w-full h-77 flex justify-between items-center px-5 rounded-5`}>
    <p className="text-xl text-white">
      {text}
    </p>
    <span>
      <img src={cancelIcon} alt="" />
    </span>
  </div>
  )
}

export default StatusUpdate