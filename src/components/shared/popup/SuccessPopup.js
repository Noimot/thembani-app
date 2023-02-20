import Button from "../button";

export default function SuccessPopup({
  icon, 
  label, 
  message, 
  handleClose,  
  btnText
}) {
  return (
    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div className="absolute bg-gray-900 opacity-75 h-screen w-screen">
      </div>
      <div className="absolute bg-white w-[700px] py-[33px] px-[81px] flex flex-col items-center justify-center text-center rounded-5 gap-[35px] z-100 shadow-xl">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="flex flex-col gap-[13px]">
          <span className="text-[27px] font-bold">{label}</span>
          <p className="text-xl font-normal">{message}</p>
        </div>
        <div className="flex gap-[25px] justify-center">
        <Button btnText={btnText} handleClick={handleClose} className='p-4 w-[135px]'/>
        </div>
      </div>
    </div>
  )
}