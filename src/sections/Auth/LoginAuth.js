import React from 'react'

function LoginAuth({otp}) {

  const handleSubmit = () => {
    otp()
  }

  return (
    
    <div
    class="md:ml-auto bg-white rounded-md shadow p-6"
    style={{width: "411px", height:"603px"}}
  >
    <div class="flex mx-auto justify-center items-center my-8">
      <img src="/password.svg" alt='p' />
    </div>

    <input
      type="text"
      placeholder="Email Address"
      x-ref="email"
      class="w-full rounded px-3 mt-8 email"
      style={{backgroundColor: "#e6e6e6", height: "51px"}}
      required
    />
    <div class="relative" style={{position:"relative"}}>
      <input
      x-ref="password"
      placeholder="Confirm Password"
      class="w-full rounded px-3 mt-8 password"
      style={{backgroundColor: "#e6e6e6", height: "51px"}}
      />
   
    </div>
   

    <div class="flex items-right justify-end mt-6">
      <a href="#" class="text-green-500 mr-2">
        forgot password?
      </a>
    </div>
    <button
    type="submit"
    onClick={() => handleSubmit()}
     
      class="px-3 py-2 w-full mt-8 bg-green-500 text-white rounded"
      style={{ height: "51px"}}
    >
    <span >Sign In</span>

     
    </button>
   

    <h3 class="text-center mt-10">
      Don't have an account?
      <a href="./create-account" class="text-green-500">Sign Up</a>
    </h3>
  </div>
  )
}

export default LoginAuth