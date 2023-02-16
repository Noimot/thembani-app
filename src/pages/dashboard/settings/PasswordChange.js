import { useState } from "react";
import Button from "../../../components/shared/button";
import DashboardNav from "../../../components/shared/dashboard-nav";
import SuccessPopup from "../../../components/shared/popup/SuccessPopup";
import { useDispatch, useSelector } from "react-redux";

// icons
import successIcon from '../../../assets/images/success-icon.svg'
import { postChangePassword } from "../../../app/features/thunk/authThunk";

export default function PasswordChange() {
  const dispatch = useDispatch()
  const { changePasswordData, isLoading } = useSelector(
    (state) => state.auth
  );


  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('');
  const [confirmP, setComfirmP] = useState('');
  const [errorOldP, setErrorOldP] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmP, setErrorConfirmP] = useState('');
  const [showModal, setShowModal] = useState(false)

  const handleChangeP = (event) => {
    setPassword(event.target.value);
    setErrorPassword('');
  };

  const handleChangeOld = (event) => {
    setOldPassword(event.target.value);
    setErrorOldP('');
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
  // const handleBlurConfirmP = () => {
  //   if(password !== confirmP){
  //     setErrorConfirmP('Password does not match')
  //   }
  // }
  const handleClose = () => {
    setShowModal(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (password.length < 1) {
      setErrorPassword('Please enter new password');
    }else if(confirmP.length < 1){
      setErrorConfirmP('Password does not match')
    }else if(oldPassword.length < 1){
      setErrorOldP('Please enter old password')
    }else if(!errorPassword && !errorConfirmP && !errorOldP){
      dispatch(postChangePassword({
        "old_password":oldPassword,
        "new_password":password,
        "confirm_password":confirmP
      }))
      // setShowModal(true)
    }
  }
  if(changePasswordData?.success){
    setShowModal(true)
  }
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      {showModal &&
        <SuccessPopup
        icon={successIcon}
        label='Congratulations!'
        message='You have successfully changed your password.'
        handleClose={handleClose} 
        btnText='Okay'
        />
      }
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
              <input className={`${errorOldP ? " border border-red-4" : ''} w-1/2 h-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="text" name="password0" id="password0" placeholder="Old Password" onChange={handleChangeOld} value={oldPassword}/>
              <p className="text-sm font-medium text-dark-1">{errorOldP}</p>
            </label>
            <label>
              <input className={`${errorPassword ? " border border-red-4" : ''} w-1/2 h-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password1" id="password1" placeholder="New Password" onBlur={handleBlurP} onChange={handleChangeP} value={password}/>
              <p className="text-sm font-medium text-dark-1">{errorPassword}</p>
            </label>
            <label>
              <input className={`${errorConfirmP ? " border border-red-4" : ''} w-1/2 h-full bg-grey-1 outline-0 text-sm placeholder:text-dark-3 text-dark-3 px-[20px] py-[12px] rounded-5`} type="password" name="password2" id="password2" placeholder="Confirm Password" onChange={handleChangeConfirmP} value={confirmP}/>
              <p className="text-sm font-medium text-dark-1">{errorConfirmP}</p>
            </label>
          </div>
          <div className="w-200 h-62 mt-[28px]"><Button btnText="Submit" btnType="submit" loading={isLoading}/></div>
        </form>
      </div>
    </div>
  )
}