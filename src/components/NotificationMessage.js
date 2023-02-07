import cancel from '../assets/images/notifCancel.svg'
import arrow from '../assets/images/readMore.svg'

export default function NotificationMessage({label, id, message, date}) {
  return (
    <div className="flex flex-col w-[49%] gap-[10px] bg-green rounded-5 px-[27px] py-[19px]" key={id}>
      <div className='flex items-center justify-between'>
        <span className='text-[20px] font-[500]'>{label}</span>
        {/* An onClick handler to be added to dynamically delete the message from the notifcation page */}
        <img className='cursor-pointer' src={cancel} alt="" />
      </div>
      <div>
        <p className='text-[18px]'>{message}</p>
      </div>
      <div className='flex items-center justify-between text-[14px]'>
        <span>On {date}</span>
        {/* Div to be changed to link which opens up the full message */}
        <div className='flex cursor-pointer'> 
          <span>Read More</span>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}