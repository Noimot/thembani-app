import { useState } from "react";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";

export default function PasswordChange() {
  const [password, setPassword] = useState('');
  const [confirmP, setComfirmP] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmP, setErrorConfirmP] = useState('');


  const handleChangeP = (event) => {
    setPassword(event.target.value);
    setErrorPassword('');
  };

  const handleChangeConfirmP = (event) => {
    setComfirmP(event.target.value)
    if(password !== event.target.value){
      setErrorConfirmP('Password does not match')
    }else{
      setErrorConfirmP('')
    }

  }
  const handleBlurP = () => {
    if (password.length < 8) {
      setErrorPassword('Password must be 8 characters long');
    } else if (!/[A-Z]/.test(password)) {
      setErrorPassword('Password must contain at least one uppercase letter');
    } else if (!/\d/.test(password)) {
      setErrorPassword('Password must contain at least one number');
    }
  };
  // const handleBlurConfirmP = () => {
  //   if(password !== confirmP){
  //     setErrorConfirmP('Password does not match')
  //   }
  // }
  const handleSubmit = e => {
    e.preventDefault()
    if(!errorPassword && !errorConfirmP){
      console.log(password, confirmP);
    }
  }
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Settings" subHeading="Change Password"/>
      <div className="bg-green w-full flex flex-col gap-[18px] p-[26px] rounded-5">
        <div>
          <p>Your password must be 8 characters long</p>
          <p>It must contain at least one uppercase.</p>
          <p>It must also contain at least one number.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-[9px]">
            <label>
              <input className={`${errorPassword ? " border border-red-4" : ''} w-1/2 h-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password" id="password" placeholder="New Password" onBlur={handleBlurP} onChange={handleChangeP} />
              <p className="text-red-4">{errorPassword}</p>
            </label>
            <label>
              <input className={`${errorConfirmP ? " border border-red-4" : ''} w-1/2 h-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password" id="password" placeholder="Confirm Password" onChange={handleChangeConfirmP}/>
              <p className="text-red-4">{errorConfirmP}</p>
            </label>
          </div>
          <div className="w-200 h-62 mt-[28px]"><Button btnText="Submit" btnType="submit"/></div>
        </form>
      </div>
    </div>
  )
}