import { useState } from "react";
import Button from "../../shared/button";

export default function NewPassword({handleSuccess}) {
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
    } else if (password.length < 1) {
      setErrorPassword('Please enter new password');
    }
  };
  const handleSubmit = e => {
    e.preventDefault()
    if (password.length < 1) {
      setErrorPassword('Please enter new password');
    }else if(confirmP.length < 1){
      setErrorConfirmP('Password does not match')
    }else if(!errorPassword && !errorConfirmP){
      handleSuccess()
      console.log(password, confirmP);
    }
  }
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-[16px]" onSubmit={handleSubmit}>
        <label>
          <input className={`${errorPassword ? " border border-red-4" : ''} w-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password1" id="password1" placeholder="New Password" onBlur={handleBlurP} onChange={handleChangeP} value={password}/>
          <p className="text-red-4">{errorPassword}</p>
        </label>
        <label>
          <input className={`${errorConfirmP ? " border border-red-4" : ''} w-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password2" id="password2" placeholder="Confirm Password" onChange={handleChangeConfirmP} value={confirmP}/>
          <p className="text-red-4">{errorConfirmP}</p>
        </label>
        <Button className='py-[10px]' btnText="Create Password" btnType="submit"/>
      </form>
    </div>
  )
}