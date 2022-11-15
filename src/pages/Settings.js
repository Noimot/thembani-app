import React from 'react'

function Settings() {
  return (
    <div className="container px-5 mx-auto grid">
  <div className="w-full px-8 py-8 bg-green-50 rounded my-6 mx-auto">
    <div className="my-3">
      <p className="text-lg">
        Your password must be 8 characters long.<br />
        It must contain at least one uppercase.<br />
        It must also contain at least one number.
      </p>
    </div>
    <div className="block">
      <div>
        <input type="password" placeholder="New password" className="bg-gray-100 placeholder-gray-900  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 my-1" style={{height: 51}} />
      </div>
      <div>
        <input type="password" placeholder="Confirm password" className="bg-gray-100 placeholder-gray-900  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 my-1" style={{height: 51}} />
      </div>
      <button className="h-12 px-10 py-3 bg-green-500 text-white rounded shadow mt-3 ">Submit</button>
    </div>
  </div>
</div>

  )
}

export default Settings