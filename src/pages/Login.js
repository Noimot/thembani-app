import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import LoginAuth from '../sections/Auth/LoginAuth'
import ConfirmOtp from '../sections/Auth/ConfirmOtp'


function Login() {
  const [confirmOtp, setConfirmOtp] = useState(false)

 const handleOtp = (val) => {
    setConfirmOtp(true)
 }
  return (
   <div>
     
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/banner.svg')",
        backgroundPosition: "center",
        backgrounrRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
      }}
    >
      <div
        className="w-full h-[102px] px-6 flex shadow-md justify-between items-center bg-white"
      >
        <img
          src="./logo.png"
          alt="logo"
          className="block h-24 w-auto"
        />
      </div>
      <div className="w-full px-8 md:px-20 block items-center py-8">
        {confirmOtp ?  <ConfirmOtp /> : <LoginAuth otp={handleOtp} />}
        
       
      </div>
    </div>
   </div>
  )
}

export default Login
