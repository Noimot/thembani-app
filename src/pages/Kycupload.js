import React from 'react'
import Upload from "../assets/img/upload.svg"

function Kycupload() {
  return (
    <main className="h-full w-full overflow-y-auto">
  <div className="container w-full mx-auto grid">
    <div className="w-full px-8 py-8 bg-green-50 rounded my-4 mx-auto">
      <h3 className="font-semibold">You will be required to take a selfie:</h3>
      <ul className="list-inside mt-3">
        <li>&gt; Make sure that your head is not covered.</li>
        <li>&gt; Make sure your face is not covered.</li>
        <li>&gt; Ensure that you have a solid background.</li>
      </ul>
      <div className="w-full mt-4 flex justify-center items-center flex-wrap ">
        <div className="m-2 md:w-525 bg-gray-200 text-center py-6">
          <h4>Declaration of address/Utility bill</h4>
          <label htmlFor="UploadUt"><img src={Upload} className="mx-auto mt-2" /></label>
          <input  x-ref="utility" hidden type="file" name="Upload" id="UploadUt" capture="user" accept="image/*" />
          <span x-text="$refs?.utility.files[0]?.name" />
        </div>
        <div className="m-2 md:w-525 bg-gray-200 text-center py-6">
          <h4>Copy of NUIT</h4>
          <label htmlFor="Uploadnu"><img src={Upload} className="mx-auto mt-2" /></label>
          <input  x-ref="nuit" hidden type="file" name="Upload" id="Uploadnu" capture="user" accept="image/*" />
          <span x-text="$refs?.nuit.files[0]?.name" />
        </div>
        <div className="m-2 md:w-full bg-gray-200 text-center py-6">
          <h4>CEDSIF Authorisation Letter</h4>
          <label htmlFor="Uploadce"><img src={Upload} className="mx-auto mt-2" /></label>
          <input x-ref="cedsif" hidden type="file" name="Upload" id="Uploadce" capture="user" accept="image/*" />
          <span x-text="$refs?.cedsif.files[0]?.name" />
        </div>
        <div className="m-2 md:w-525 bg-gray-200 text-center py-6 px-3">
          <select className="w-full px-3 bg-transparent-full">
            <option value="Select Identification">Select Identification</option>
          </select>
        </div>
        <div className="m-2 md:w-525 bg-gray-200 text-center py-6">
          <h4>National ID </h4>
          <label htmlFor="Uploadbi"><img src={Upload} className="mx-auto mt-2" /></label>
          <input  x-ref="identity" hidden type="file" name="Upload" id="Uploadbi" capture="user" accept="image/*" />
          <span x-text="$refs?.identity.files[0]?.name" />
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        <button className="h-12 px-10 py-3 bg-green-600 text-white rounded shadow ">Proceed</button>
        <button className="h-12 px-10 py-3 bg-gray-600 text-white rounded shadow ">Back</button>
      </div>
      <button className="h-12 px-10 py-3 bg-red-600 text-white rounded shadow ">Cancel</button>
    </div>
  </div>
</main>

  )
}

export default Kycupload