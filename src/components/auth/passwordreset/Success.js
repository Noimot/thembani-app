import { Link } from 'react-router-dom'
import SuccessIcon from '../../../assets/images/success-icon.svg'
import Button from '../../shared/button'

export default function Success() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[200px] h-[200px]'>
        <img className='w-full h-full' src={SuccessIcon} alt="" />
      </div>
      <div className='flex flex-col gap-2 text-center'>
        <span className='font-bold text-[27px]'>Congratulations</span>
        <div className='flex flex-col'>
          <span className='font-normal text-[14px]'>A default password has been sent to your email</span>
          <span className='font-normal text-[14px]'>Proceed to login and change the default password on the setting</span>
        </div>
        <Link to="/login" className='mt-10'>
          <Button className='py-2.5' btnText='Sign In'/>
        </Link>
      </div>
    </div>
  )
}