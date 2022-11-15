import React from 'react'

function Insurance() {
   
  return (
    <main className="h-full overflow-y-auto">
      <div className="container px-8 mx-auto grid">
        <div className="w-full  px-5 py-16 bg-green-50 rounded my-4 mx-auto">
          <div className="mx-auto flex items-center justify-center gap-3">
            <img src="./assets/img/check 2.svg" />
            <h3 className="text-green-500 text-2xl md:text-4xl font-semibold">
              Your insurance is active
            </h3>
          </div>
        </div>
        <div className="mb-6 px-6 py-8 w-full rounded bg-green-50">
          <h3 className="font-medium">
            In case of job loss or permanent disability you can send the
            relevent documents to claim your insurance.
          </h3>
          <h3 className="font-medium">
            In case of death your next of kin will claim on your behalf.
          </h3>
          <h4 className="mt-4">
            Select reason for your claim below and upload required documents.
          </h4>
          <div className="flex flex-wrap mx-auto gap-3 mt-8 my-3">
            <div className=" md:w-525 bg-white text-center py-6">
              <h4>Copy of ID</h4>
              <label htmlFor="Upload">
                <img src="./assets/img/upload.svg" className="mx-auto mt-2" />
              </label>
              <input
                hidden
                type="file"
                name="Upload"
                id="Upload"
                capture="user"
                accept="image/*"
              />
            </div>
            <div className=" md:w-525 bg-white text-center py-6">
              <h4>Copy of Death Certificate</h4>
              <label htmlFor="Upload">
                <img src="./assets/img/upload.svg" className="mx-auto mt-2" />
              </label>
              <input
                hidden
                type="file"
                name="Upload"
                id="Upload"
                capture="user"
                accept="image/*"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            <button
              className="h-12 px-10 py-3 bg-green-600 text-white rounded shadow "
            >
              Submit Claim
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Insurance