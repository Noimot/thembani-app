import { Link } from 'react-router-dom'
import SuccessIcon from '../../../assets/images/success-icon.svg'
import Button from '../../shared/button'

export default function Success() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-[200px] h-[200px]'>
        <img className='w-full h-full' src={SuccessIcon} alt="" />
      </div>
      <div className='flex flex-col gap-[8px] text-center'>
        <span className='font-[700] text-[27px]'>Congratulations</span>
        <span className='font-[400] text-[14px]'>Password has been successfully changed</span>
        <Link to="/create-account" className='mt-[40px]'>
          <Button className='py-[10px]' btnText='Sign In'/>
        </Link>
      </div>
    </div>
  )
}