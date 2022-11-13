import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button } from '@windmill/react-ui'
import ConfirmOtp from '../sections/Register/ConfirmOtp'
import RegisterAuth from '../sections/Register/RegisterAuth'


function CreateAccount() {
  const [confirmOtp, setConfirmOtp] = useState(false)

 const handleOtp = (val) => {
    setConfirmOtp(true)
 }
  return (
   <div>
     
    <div
      class="w-full"
      style={{
        backgroundImage: "url('/banner.svg')",
        backgroundPosition: "center",
        backgrounrRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
      }}
    >
      <div
        class="w-full h-[102px] px-6 flex shadow-md justify-between items-center bg-white"
      >
        <img
          src="./logo.png"
          alt="logo"
          class="block h-24 w-auto"
        />
      </div>
      <div class="w-full px-8 md:px-20 block items-center py-8">
        {confirmOtp ?  <ConfirmOtp /> : <RegisterAuth otp={handleOtp} />}
        
       
      </div>
    </div>
   </div>
  )
}

export default CreateAccount
