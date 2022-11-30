import React from 'react'
import Ticket from "../assets/img/ticket.svg"
import Dollar from  "../assets/img/dollar.svg"

function PaymentSchedule() {
  return (
    <main className="h-full overflow-y-auto">
    <div className="container px-8 mx-auto grid">
      <div className="w-full flex-wrap flex  gap-5 md:gap-2 px-5 py-8 bg-green-50 rounded my-4 mx-auto">
        <div className="md:w-2/6 px-2">
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-orange-500 text-white flex items-center justify-center">
                <img src={Dollar} />
              </div>
              <h3>Borrowed Principle</h3>
            </div>
            <h3>MZN 98 888</h3>
          </div>
          <hr className="my-3" />
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-400 text-white flex items-center justify-center">
                <img src={Ticket} />
              </div>
              <h3>Annual Rate</h3>
            </div>
            <h3> 33.3%</h3>
          </div>
          <hr className="my-3" />
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-yellow-400 text-white flex items-center justify-center">
                <img src={Ticket} />
              </div>
              <h3>Period</h3>
            </div>
            <h3>24M</h3>
          </div>
       </div>
      </div>
      <div className="mb-6 py-6 rounded bg-green-50">
        <table>
          <thead>
            <tr>
              <th>Months</th>
              <th>Total payment</th>
              <th>Principal</th>
              <th>Interest</th>
              <th>Unpaid Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td />
              <td />
              <td />
              <td>MZN 98 888</td>
            </tr>
            <tr>
              <td>1</td>
              <td>MZN 5 493 .7</td>
              <td>MZN 4 120.33 </td>
              <td>MZN 1 373.37 </td>
              <td>MZN 94 767.67</td>
            </tr>
            <tr>
              <td>2</td>
              <td>MZN 5 493 .7</td>
              <td>MZN 4 120.33 </td>
              <td>MZN 1 373.37 </td>
              <td>MZN 90 647.34</td>
            </tr>
            <tr>
              <td>3</td>
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex justify-between items-center mb-6">
                <div class="flex gap-3">
                    <a href="./kycupload.html" class="h-12 px-10 py-3 bg-green-600 text-white rounded shadow ">Proceed</a>
                    <button class="h-12 px-10 py-3 bg-gray-600 text-white rounded shadow ">Back</button>
                </div>
                <button class="h-12 px-10 py-3 bg-red-600 text-white rounded shadow ">Cancel</button>
    
            </div>
    </div>
  </main>
  )
}

export default PaymentSchedule