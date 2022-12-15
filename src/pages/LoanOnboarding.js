import React from 'react'

function LoanOnboarding() {
  return (
   <main className="h-full overflow-y-auto px-2 w-full mt-3">
  <div className="w-full mx-auto grid bg-green-50 rounded-md py-4 px-5">
    <h3 className="text-gray-700 ml-12">Personal information</h3>
    <div className="flex flex-wrap gap-3 justify-center mt-6">
      <input  x-ref="firstName" placeholder="First Name" className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md" type="text" style={{width: 320, height: 51}} />
      <input x-ref="middleName" placeholder="Middle Name" className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md" type="text" style={{width: 320, height: 51}} />
      <input x-ref="lastName" placeholder="Last Name" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md" type="text" style={{width: 320, height: 51}} />
      <select x-ref="gender" className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md pr-4" type="text" style={{width: 320, height: 51}}>
        <option value>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div>
        <label htmlFor="dob" type="text" className="w-full">
          <div x-text="$refs.dob.value ? $refs.dob.value : 'date of birth' " className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md flex items-center" style={{width: 320, height: 51}}>Date of Birth</div>
        </label>
        <input hidden id="dob" x-ref="dob"  placeholder="D.O.B" type="date" />
      </div>
      <input x-ref="moi" placeholder="Means of Identification" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 " style={{height: 51}} />
      <input x-ref="emploNo" placeholder="Employee No." className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md" type="text" style={{width: 320, height: 51}} />
      <input x-ref="nin" placeholder="National ID Number" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 " style={{height: 51}} />
      <input x-ref="marital" placeholder="Marital Status" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 " style={{height: 51}} />
      <div className="flex items-center gap-3">
        <select className="bg-gray-100 placeholder-gray-800  text-gray-800 px-1 focus:outline-none rounded-md " style={{height: 51}}>
          <option value={258}>258</option>
        </select>
        <input x-ref="number" placeholder="Cellphone Number" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-400 w-280 " style={{height: 51}} />
      </div>
      <input x-ref="email" placeholder="Email Address" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 " style={{height: 51}} />
      <textarea x-ref="address" placeholder="residential area" name id className="bg-gray-100 placeholder-gray-800  text-gray-800 px-2 py-2 focus:outline-none rounded-md w-320 md:w-900" style={{height: 71}} defaultValue={"            Residential address\n            "} />  
      <select x-ref="resident" className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md pr-4" type="text" style={{width: 320, height: 51}}>
        <option value>Residential Status</option>
        <option value={1}>Resident</option>
        <option value={0}>Non Resident</option>
      </select>
      <input x-ref="locality" placeholder="Locality Code" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 " style={{height: 51}} />       
    </div>
    <h3 className="text-gray-700 my-6 ml-12">Employer Details</h3>
    <div className="flex flex-wrap gap-3 mx-auto mt-3 justify-center">
      <input x-ref="employerName" placeholder="Name" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 " style={{height: 51}} />
      <input x-ref="employerPhone" placeholder="Phone Number" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 " style={{height: 51}} />
      <input x-ref="employeraddress" placeholder="Address" name id className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 py-2 pb-4 focus:outline-none rounded-md w-320 md:w-900" style={{height: 71}} />
      <input x-ref="ministry" placeholder="Ministry" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 " style={{height: 51}} />
      <input x-ref="employeeNo" placeholder="Employee No." className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md lg:w-525 w-320 " style={{height: 51}} />
    </div>
    <h3 className="text-gray-700 my-6 ml-12">Next of Kin (Mother)</h3>
    <div className="flex flex-wrap gap-3 mx-auto mt-3 justify-center">
      <input x-ref="motherName" placeholder="Name" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 md:w-900" style={{height: 51}} />
      <input x-ref="motherAddress" placeholder="residential area" name id className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 py-2 pb-4 focus:outline-none rounded-md w-320 md:w-900" style={{height: 71}} />
    </div>
    <h3 className="text-gray-700 my-6 ml-12">Next of Kin (Father)</h3>
    <div className="flex flex-wrap gap-3 mx-auto mt-3 justify-center">
      <input x-ref="fatherName" placeholder="Name" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 md:w-900" style={{height: 51}} />
      <input x-ref="fatherAddress" placeholder="residential area" name id className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 py-2 pb-4 focus:outline-none rounded-md w-320 md:w-900" style={{height: 71}} />
    </div>
    <h3 className="text-gray-700 my-6 ml-12">Salary Information</h3>
    <div className="flex flex-wrap gap-3 mx-auto mt-3 justify-center">
      <input x-ref="salary" placeholder="Monthly Income" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 md:w-900" style={{height: 51}} />
      <select x-ref="bank"  className="bg-gray-100 placeholder-gray-800 text-gray-800 px-6 focus:outline-none rounded-md pr-4" type="text" style={{width: 320, height: 51}}>
        <option value>Bank</option>
        <option value=" Access bank Mozambique, S.A"> Access bank Mozambique, S.A</option>
        <option value="Absa Bank Mozambique">Absa Bank Mozambique</option>
        <option value="Banco Comercial e de Investimentos (BCI)">Banco Comercial e de Investimentos (BCI)</option>
        <option value=" Banco de Investimentos Global (BIG)"> Banco de Investimentos Global (BIG)</option>
        <option value="Banco Mercantil e de Investimentos (BMI)">Banco Mercantil e de Investimentos (BMI)</option>
        <option value=" Banco MAIS">Banco MAIS</option>
        <option value="Banco Moza">Banco Moza</option>
        <option value="Banco Nacional de Investimentos (BNI)">Banco Nacional de Investimentos (BNI)</option>
        <option value="Banco Société Générale Moçambique (SGM)">Banco Société Générale Moçambique (SGM)</option>
        <option value="Banco Terra (BTM)">Banco Terra (BTM)</option>
        <option value="Ecobank Mozambique">Ecobank Mozambique</option>
        <option value="First National Bank (FNB)">First National Bank (FNB)</option>
        <option value=" First Capital Bank Mozambique (FCBM)"> First Capital Bank Mozambique (FCBM)</option>
        <option value="Letshego Holdings Limited">Letshego Holdings Limited</option>
        <option value="Millennium BIM (BIM)">Millennium BIM (BIM)</option>
        <option value="Nedbank Mozambique (NBM)">Nedbank Mozambique (NBM)</option>
        <option value="Opportunity Bank Mozambique (OBM)">Opportunity Bank Mozambique (OBM)</option>
        <option value=" Socremo Microfinance Bank"> Socremo Microfinance Bank</option>
        <option value="United Bank for Africa (UBA)">United Bank for Africa (UBA)</option>
        <option value="Standard Bank Mozambique">Standard Bank Mozambique</option>
      </select>
      <input x-ref="accHolder" placeholder="Account holder" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md" style={{width: 320, height: 51}} />
      <input x-ref="accountNumber" placeholder="Account Number" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md " style={{width: 320, height: 51}} />
      <input x-ref="salpaymentDate" placeholder="Salary payment Date" className="bg-gray-100 placeholder-gray-800  text-gray-800 px-6 focus:outline-none rounded-md w-320 md:w-900" style={{height: 51}} />
    </div>
  </div>
  <div className="flex justify-between items-center my-6">
    <div className="flex gap-3">
      <button className="h-12 px-10 py-3 bg-green-600 text-white rounded shadow ">Submit</button>
      <button className="h-12 px-10 py-3 bg-red-600 text-white rounded shadow ">Cancel</button>
    </div>
  </div>
</main>

  )
}

export default LoanOnboarding