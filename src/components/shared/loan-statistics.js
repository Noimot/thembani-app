import React from 'react'

const LoanStatistics = ({icon, text, amount, icon2, text2, amount2, icon3, text3, amount3}) => {
  return (
    <div className="flex flex-col gap-y-5 w-1/3 justify-center">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-10 shadow-5xl bg-orange-1 flex items-center justify-center">
          <img src={icon} alt="" />
        </div>
        <p className="text-dark-4">{text}</p>
      </div>
      <p className="text-dark-1">{amount}</p>
    </div>
    <div className="border-t w-full border-solid border-grey-6" />
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-10 shadow-5xl bg-yellow-1 flex items-center justify-center">
          <img src={icon2} alt="" />
        </div>
        <p className="text-dark-4">{text2}</p>
      </div>
      <p className="text-dark-1">{amount2}</p>
    </div>
    <div className="border-t w-full border-solid border-grey-6" />
    {icon3 ? <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <div className="w-10 h-10 rounded-10 shadow-5xl bg-yellow-1 flex items-center justify-center">
          <img src={icon3} alt="" />
        </div>
        <p className="text-dark-4">{text3}</p>
      </div>
      <p className="text-dark-1">{amount3}</p>
    </div>: null}
  </div>
  )
}

export default LoanStatistics