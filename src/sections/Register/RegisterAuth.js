import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { register } from '../../services/requests/auth';

function RegisterAuth({otp}) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [number, setNumber] = useState("")
  const [loading, setLoading] = useState(false)


  const handleSubmit = () => {
    setLoading(true)
    const body = {
      username: username,
      email: email,
      phone_number: number,
      password: password,
      password_confirmation: confirmpassword
    } 

    if (email === '' || password === '' || number === "" || username === "") {
     toast.error("please complete form to proceed")
     setLoading(false)
    } else {
       register(body).then((res) => {
       toast.success("login successful")
       window.localStorage.setItem("userEmail", email)
       setLoading(false)
       console.log(res.data)
       otp()
      }).catch((err) => {
        toast.error("something went wrong please try again")
      })
    } 

  }

  return (
    
 <div className="md:ml-auto bg-white rounded-md shadow p-6" style={{width: 411, height: 'auto'}}>
  <div className="flex mx-auto justify-center items-center">
    <div className="w-16 h-16 border border-green-500 rounded-full flex justify-center items-center font-bold text-[30px]" style={{fontSize: 30, fontWeight: 700, backgroundColor: '#fcfcfc'}}>
      1
    </div>
    <hr className="h-1 w-16" />
    <div className="w-16 h-16 border rounded-full flex justify-center items-center font-bold text-[30px]" style={{fontSize: 30, fontWeight: 700, backgroundColor: '#fcfcfc'}}>
      2
    </div>
  </div>
  <div className="flex mx-auto justify-center items-center">
    <div className="w-16 h-16flex justify-center items-center text-center" style={{fontSize: 13}}>
      Create Account
    </div>
    <div className="w-16" />
    <div className="w-16 h-16 flex justify-center items-center text-center" style={{fontSize: 13}}>
      Confirm OTP
    </div>
  </div>
  <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="w-full username rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full email rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" className="w-full phonenumber rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full password rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="w-full confirmpassword rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <div className="flex items-center mt-6">
    <h3 className="text-md mr-1">Already have an account?</h3>
    <a href="./" className="text-green-500 mr-2">Sign in</a>
    <button onClick={() => handleSubmit()} className="px-3 py-2 bg-green-500 text-white rounded">
      Sign Up
    </button>
    {/* <a
  href="./confirmotp.html"
  className="px-3 py-2 bg-green-500 text-white rounded"
>
  Sign Up
</a> */}
  </div>
</div>

  )
}

export default RegisterAuth