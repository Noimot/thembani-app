import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Dollar from "../assets/img/dollar.svg"
import Ticket from "../assets/img/ticket.svg"

function Eligibility() {
    const history = useHistory()
    const [maxthumb, setMaxthumb] = useState(0)
    const [period, setPeriod] = useState(0)
    const [maxP, setMaxP] = useState("")
    const [maxpricee, setMaxpricee] = useState(0)
    const [montR, setMonthR] = useState(0)
   let initialdata = {};
   let netIncome =  90000.0;
   let DTI = netIncome * 0.3333;
   let LoanAmount= 50000.0;
   let oneMonth = true
   var MonthlyRepayment =  0;
   let  minprice = 6500;
   var maxprice = 60000;
   let min = 6500;
   let max= 60000;
   let isnotMin = false;
   let minthumb = 0;
  

   console.log("maxthumb");

  const  mintrigger = () => {
        validation()
        minprice = Math.min(minprice, maxprice - 500)
        minthumb = ((minprice - min) / (max - min)) * 100
      }
  const  maxtrigger = (e) => {
        maxprice = parseInt(e)
        console.log(maxprice,maxpricee);
        validation()
        MonthlyRepayment = parseInt(maxprice) + parseInt(maxprice) * 0.1
        setMonthR(MonthlyRepayment)
        DTI = netIncome * 0.3333
        console.log(DTI, MonthlyRepayment);
        // maxprice = Math.max(maxprice, minprice + 200);
        setMaxthumb (  100 - ((maxprice - min) / (max - min)) * 100)
        console.log(100 - ((maxprice - min) / (max - min)) * 100)
        setMaxP( `MZN ${maxprice}`)
        if (MonthlyRepayment>DTI) {
           MonthlyRepayment=(parseInt(maxprice) + parseInt(maxprice*0.15))/2;
          if(MonthlyRepayment>DTI){
               MonthlyRepayment=(parseInt(maxprice) + parseInt(maxprice*0.15))/3;
              if (MonthlyRepayment>DTI){
                setPeriod(0)
              }else{
                setPeriod(3)
              }
          }else{
              setPeriod(2)
          }
      }else{
        setPeriod(1)
      }
        console.log(period)
      }

    useEffect(() => {
      
      let value = false

      maxtrigger()
    

      return (() => {
        value = true
      })
     
    }, [])
    

     const validation = () => {
        if (/^\d*$/.test(minprice)) {
          if (minprice > max) {
            minprice = 9500
          }
          if (minprice < min) {
            minprice = min
          }
        } else {
          minprice = 5000
        }
        if (/^\d*$/.test(maxprice)) {
          if (maxprice > max) {
            maxprice = max
          }
          if (maxprice < min) {
            maxprice = 0
          }
        } else {
          maxprice = 10000
        }
      }

      const SetLoan = () => {
        const details = {
          MonthlyRepayment: montR,
          period:period,
          loanAmount:maxpricee
   
         }
         console.log(details);
           window.localStorage.setItem("loanDetails", JSON.stringify(details))
           const veri = JSON.parse(window.localStorage.getItem("userProfile"))
           if (veri?.isVerified === 1) {
               history.push("./loan-acceptance")
           } else {
            history.push("./kycupload")
            
           }
      }

     
  return (
  <main className="h-full overflow-y-auto">
  <div className="container px-10 mx-auto grid">
    <div className="w-full px-8 py-8 bg-green-50 rounded my-6 mx-auto">
      <div className=" items-center gap-3 md:flex ">
        <div className="w-2/5">
          <img className="object-cover  rounded-full block mx-auto" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" alt aria-hidden="true" style={{width: 150, height: 150}} />
        </div>
        <div className="w-4/5">
          <h4>Hello welcome</h4>
          <h3 className="text-green-600 text-2xl font-bold" x-text="username" />
          <div className="flex items center">
            <div className="mr-4 block">
              <small className="block">NUIT No.</small>
              <small className="block">Account No.</small>
            </div>
            <div className="block">
              <small className="block">: 6758974659</small>
              <small className="block">: 2546890716</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full px-8 py-8 bg-green-50 rounded my-4 mx-auto">
      <div className="w-2/6">
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-orange-500 text-white flex items-center justify-center">
              <img src={Dollar} />
            </div>
            <h3>Eligible Amount</h3>
          </div>
          <h3>MZN 98 888</h3>
        </div>
        <hr className="my-3" />
        <div className="w-full flex items-center justify-between ">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-yellow-400 text-white flex items-center justify-center">
              <img src={Ticket} />
            </div>
            <h3>D T I</h3>
          </div>
          <h3> 33.3%</h3>
        </div>
      </div>
    </div>
    <div>
      <h3 className="font-semibold ">Eligible Amount</h3>
      <div className="w-full px-10 py-8 bg-green-50 rounded my-4 mx-auto">
        <div className="flex-row flex items-center justify-between mb-8">
          <small>* Eligible Amount is subject to Verification</small>
        </div>
        <div className="relative  w-full">
            <div>
                <input type="range"  step={500} min={min} max={max} onChange={(e) => {maxtrigger(e.target.value);  setMaxpricee(e.currentTarget.value)}} className="absolute opacity-0   z-20 h-2 w-full  cursor-pointer" />
                <div className="relative z-10 h-2">
                <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200" />
                <div className="absolute z-20 top-0 bottom-0 rounded-md bg-green-500" style={{right: `${maxthumb}%`, left:`${minthumb}%`}} />
                <div className="absolute -mx-16 step-name flex flex-row z-30 w-24 h-6 top-0 right-0 -mt-8 text-sm text-right" style={{right: `${maxthumb}%`}} >{maxP}</div>
                <div className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-500 rounded-full -mt-2" style={{right: `${maxthumb}%`,}}/>
                </div>
            </div>
        </div>

        {/* <div class="stepper-wrapper">
          <div class="stepper-item completed">
              <div class="step-name">MT 000</div>
               <div class="step-counter"></div>
            
          </div>
          <div class="stepper-item ">
              <div class="step-name">MT 65 000</div>
            <div class="step-counter"></div>
            
          </div>
          <div class="stepper-item">
              <div class="step-name">MT 98 888</div>
            <div class="step-counter"></div>
            
          </div>
          
        </div> */}
      </div>
    </div>
    <div>
      <h3 className="font-semibold ">Period</h3>
      <div className="w-full px-4 py-8 bg-green-50 rounded my-4 mx-auto">
        <div className="stepper-wrapper">
          <div  className={`${period > 0 ? 'completed' : ''} stepper-item`}>
            <div className="step-name">0 Months</div>
            <div className={`${period == 0 ? 'complete' : ''} step-counter`} />
          </div>
          <div className={`${period > 1 ? 'completed' : ''} stepper-item`}>
            <div className="step-name">1 Months</div>
            <div className={`${period == 1 ? 'complete' : ''} step-counter`} />
          </div>
          <div  className={`${period > 2 ? 'completed' : ''} stepper-item`}>
            <div className="step-name">2 Months</div>
            <div className={`${period == 2 ? 'complete' : ''} step-counter`} />
          </div>
          <div className={`${period > 3 ? 'completed' : ''} stepper-item`}>
            <div className="step-name">3 Months</div>
            <div className={`${period == 3 ? 'complete' : ''} step-counter`} />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        <button onClick={() => SetLoan()} className="h-12 px-10 py-3 bg-green-600 text-white rounded shadow ">Get loan</button>
        <button className="h-12 px-10 py-3 bg-gray-600 text-white rounded shadow ">Back</button>
      </div>
      <button className="h-12 px-10 py-3 bg-red-600 text-white rounded shadow ">Cancel</button>
    </div>
  </div>
</main>

  )
}

export default Eligibility