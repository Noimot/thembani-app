import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/button";

export default function PasswordResetForm({handleConfirmOtp}) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const handleSubmit =(e) => {
    e.preventDefault()
    if(!email){
      setError('Please enter email address')
    }
    if(email){
      handleConfirmOtp()
      console.log(email);
    }
  }
  return (
    <div className="w-full flex flex-col gap-[74px]">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
        <label>
          <input className={`${error ? " border border-red-4" : ''} w-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="email" placeholder="Email Address"  onChange={(e) =>setEmail(e.target.value)} value={email}/>
          <p className="text-red-4">{error}</p>
        </label>
        <Button className='py-[10px]' btnText="Submit" btnType="submit"/>
      </form>
      <div className="flex items-center justify-center gap-x-3 text-sm">
        <p className="text-grey-2">Don't have an account?</p>{" "}
        <Link to="/create-account" className="text-green-1">
          Sign up
        </Link>
      </div>
    </div>
  )
}