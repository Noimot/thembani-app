import React from 'react'

function Instructions() {
  return (
  <div>
  <div className="w-full">
    <div className="w-full h-[102px] px-6 flex shadow-md justify-between items-center bg-white">
      <img src="./logo.png" alt="logo" className="block h-24 w-auto" />
    </div>
    <div className="w-full px-8 md:px-20 flex items-end justify-between py-8" style={{backgroundImage: 'url("/bg2.png")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: 'auto'}}>
      <div className="rounded-lg bg-[#D9D9D926] px-10 py-8" style={{width: 680, height: 807, background: '#d9d9d926'}}>
        <h3 className="text-3xl font-bold text-white">
          Application Instructions
        </h3>
        <h3 className="text-xl text-white">
          To successfully complete your application ensure that you have the
          following:
        </h3>
        <ul className="list-decimal px-10 mt-3">
          <li className="text-xl text-white">
            You will be required to input your NUIB number.
          </li>
          <li className="text-xl text-white">
            If you do not have a NUIB, you will be required to generate one.
            You will complete a form with your details and your NUIB number
            will be sent to you via email and sms.
          </li>
          <li className="text-xl text-white">
            After entering your NUIB number, you will move to the onboarding
            page.
          </li>
          <li className="text-xl text-white">
            You will be required to complete all Customer Onboarding fields.
          </li>
          <li className="text-xl text-white">
            Your eligible amount will be provided &amp; you will be required to
            select your preferred loan amount and period.
          </li>
          <li className="text-xl text-white">
            You will be required to take a selfie. Follow the selfie
            instructions provided on the KYC Uploads form.
          </li>
          <li className="text-xl text-white">
            You will be required to upload a CEDSIF authorisation letter.
            Click
            <a href="#" className="text-green-500">here</a>
            to download the CEDSIF authorisation letter template.
          </li>
          <li className="text-xl text-white">
            o complete your loan application, you will be required to read and
            confirm the Terms &amp; Conditions by using your NUIT number.
          </li>
          <li className="text-xl text-white mb-3">
            Once your loan application is complete, you will recieve feedback
            within 24 hours.
          </li>
        </ul>
      </div>
      <div>
        <a href="./submitnuit.html" className="bg-orange-500 text-white px-12 py-4 rounded-lg">
          Continue
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Instructions