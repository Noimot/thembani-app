import Button from "../button";

export default function ComfirmationPopup({
  icon, 
  label, 
  message, 
  handleConfirmation, 
  handleCancel, 
  confirmationBtnText, 
  cancelBtnText
}) {
  return (
    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
      <div className="absolute bg-gray-900 opacity-75 h-screen w-screen">
      </div>
      <div className="absolute bg-white py-[33px] px-[81px] flex flex-col items-center justify-center text-center rounded-5 gap-[35px] z-100 shadow-xl">
        <div>
          <img src={icon} alt="icon" />
        </div>
        <div className="flex flex-col gap-[13px]">
          <span className="text-[27px] font-[700]">{label}</span>
          <p className="text-[20px] font-[400]">{message}</p>
        </div>
        <div className="flex gap-[25px] justify-center">
        <Button btnText={confirmationBtnText} handleClick={handleConfirmation} className='p-[16px] w-[135px]'/>
        <Button btnText={cancelBtnText} handleClick={handleCancel} className='bg-red-3 p-[16px] w-[135px]'/>
        </div>
      </div>
    </div>
  )
}