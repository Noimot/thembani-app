import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { login } from '../../services/requests/auth'

function LoginAuth({otp}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    setLoading(true)
    const body = {
        email:email,
        password:password
    }
    login(body).then((res) => {
       toast.success("login successful")
       window.localStorage.setItem("userEmail", email)
       setLoading(false)
       console.log(res.data)
       otp()
    }).catch((err) => {
       toast.error("something went wrong")
       setLoading(false)
    })
  //  otp()
  }

  return (
    
    <div
    className="md:ml-auto bg-white rounded-md shadow p-6"
    style={{width: "411px", height:"603px"}}
  >
    <div className="flex mx-auto justify-center items-center my-8">
      <img src="/password.svg" alt='p' />
    </div>

    <input
      type="text"
      placeholder="Email Address"
      onChange={(e) => setEmail(e.target.value)}
      className="w-full rounded px-3 mt-8 email"
      style={{backgroundColor: "#e6e6e6", height: "51px"}}
      required
    />
    <div className="relative" style={{position:"relative"}}>
      <input
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
      className="w-full rounded px-3 mt-8 password"
      style={{backgroundColor: "#e6e6e6", height: "51px"}}
      />
   
    </div>
   

    <div className="flex items-right justify-end mt-6">
      <a href="#" className="text-green-500 mr-2">
        forgot password?
      </a>
    </div>
    <button
    type="submit"
    onClick={() => handleSubmit()}
    disabled={loading}
     
      className="px-3 py-2 w-full mt-8 bg-green-500 text-white rounded"
      style={{ height: "51px"}}
    >
    <span >{loading ? "loading...":"Sign In"}</span>

     
    </button>
   

    <h3 className="text-center mt-10">
      Don't have an account?
      <a href="./create-account" className="text-green-500">Sign Up</a>
    </h3>
  </div>
  )
}

export default LoginAuth