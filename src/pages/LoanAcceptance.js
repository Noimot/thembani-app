import React from 'react'

function LoanAcceptance() {
  return (
    <main className="h-full overflow-y-auto">
  <div className="container px-10 mx-auto grid">
    <div className="w-full px-8 py-8 bg-green-50 rounded my-4 mx-auto">
      <div className="w-full bg-white rounded border px-8 py-10">
        <p>You are requesting for a loan of MZN<span x-text="details.loanAmount">XXXXXXX</span> for <span x-text="details.period">X</span> months. Monthly repayment will be MZN<span x-text="details.MonthlyRepayment">XXXXXX</span> and will be deducted from source commencing from your next salary.<br /> <br />
          An insurance will also be taken on the loan against loss of Job, permanent disability and death and the premium will be borne by you and deducted from the loan sum. Please input your NUIT number to accept
          By inputting your NUIT number, I accept the terms and conditions of the loan and authorize TAG to deduct loan repayment at salary source through my NUIT number. 
        </p>
      </div>
      <input placeholder="Input NUIT Number for loan acceptance" className="bg-gray-100 placeholder-gray-800 mt-4 text-gray-800 px-6 focus:outline-none rounded-md" type="text" style={{width: 350, height: 51}} />
      <div className="flex flex-row gap-3 items-center mt-4">
        <input x-ref="terms" type="checkbox"  />
        <p>i have read and agreed with the <a href="../assets/TERMOS E CONDIÇÕES.pdf" target="_blank"> terms and conditions</a></p>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        <button  className="h-12 px-10 py-3 bg-green-600 text-white rounded shadow ">Accept</button>
        <button className="h-12 px-10 py-3 bg-gray-600 text-white rounded shadow ">Back</button>
      </div>
      <button className="h-12 px-10 py-3 bg-red-600 text-white rounded shadow ">Cancel</button>
    </div>
  </div>
</main>

  )
}

export default LoanAcceptance