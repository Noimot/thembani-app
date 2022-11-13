import React from 'react'

function RegisterAuth({otp}) {

  const handleSubmit = () => {
    otp()
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
  <input type="text" placeholder="Username" className="w-full username rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="text" placeholder="Email Address" className="w-full email rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="text" placeholder="Phone Number" className="w-full phonenumber rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input type="text" placeholder="Password" className="w-full password rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <input placeholder="Confirm Password" className="w-full confirmpassword rounded px-3 mt-8" style={{backgroundColor: '#e6e6e6', height: 51}} />
  <div className="flex items-center mt-6">
    <h3 className="text-md mr-1">Already have an account?</h3>
    <a href="./" className="text-green-500 mr-2">Sign in</a>
    <button onClick={() => handleSubmit()} className="px-3 py-2 bg-green-500 text-white rounded">
      Sign Up
    </button>
    {/* <a
  href="./confirmotp.html"
  class="px-3 py-2 bg-green-500 text-white rounded"
>
  Sign Up
</a> */}
  </div>
</div>

  )
}

export default RegisterAuth