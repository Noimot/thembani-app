import DashboardNav from "../../../components/shared/dashboard-nav";
import { useState } from "react";
import '../../../styles/style.css'
import ImageUpload from "../../../components/shared/input-file";
import Button from "../../../components/shared/button";
import ComfirmationPopup from "../../../components/shared/popup/ComfirmationPopup";

// Icons
import activeIcon from '../../../assets/images/activeIcon.svg'
import ExIcon from '../../../assets/images/exclamation-mark.svg'


export default function InsuranceStatus() {
  const [radioOption, setRadioOption] = useState('Job loss')
  const [imageID, setImageID] = useState(null)
  const [imageCert, setImageCert] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const onOptionChange = e => {
    setRadioOption(e.target.value)
  }
  const handleChangeID = e => {
    setImageID(e.target.files[0])
    console.log(e.target.files[0]);
  }
  const handleChangeCert = e => {
    setImageCert(e.target.files[0])
    console.log(e.target.files[0]);
  }
  const handleSubmit = e => {
    e.preventDefault()
    // triggers the confirmation pop up
    setShowModal(true)
  }
  const handleConfirmation = () =>{
    // This is where the submission happens
    console.log(radioOption, imageID, imageCert);
    setShowModal(false)
  }
  const handleCancel = () =>{
    setShowModal(false)
  }

  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      {showModal && 
      <ComfirmationPopup
      icon={ExIcon}
      label='Insurance Claim!'
      message='Are you sure you want to claim your insurance?'
      handleConfirmation={handleConfirmation}
      handleCancel={handleCancel}
      confirmationBtnText='Yes, Claim'
      cancelBtnText='Cancel'
      />
      }
      <DashboardNav heading="Insuarnce" subHeading="Status"/>
      <div className="flex flex-col gap-[13px]">
        <div className="bg-green w-full flex gap-[18px] justify-center items-center py-[80px] rounded-5">
          <img src={activeIcon} alt="" />
          <span className="text-[48px] text-green-1 font-[600]">Your insurance is active</span>
        </div>
        <div className="bg-green rounded-5 px-[20px] py-[32px]">
          <div className="text-[18px] font-[500] mb-[11px]">
            <p>In case of job loss or permanent disability you can send the relevent documents to claim your insurance.</p>
            <p>In case of death your next of kin will claim on your behalf.</p>
          </div>
          <span>Select reason for your claim below and upload required documents.</span>
          <form className="mt-[23px]" onSubmit={handleSubmit}>
            <div className="flex gap-[71px]">
              <label className="radio-container">Job loss
                <input type="radio" checked={radioOption === "Job loss" ? 'checked': ''} name="radio" onChange={onOptionChange} value='Job loss'/>
                <span className="checkmark"></span>
              </label>
              <label className="radio-container">Disability
                <input type="radio" checked={radioOption === "Disability"? "checked" : ""} name="radio" onChange={onOptionChange} value='Disability'/>
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex gap-[20px] w-[70%]">
              <ImageUpload label="Copy of ID" name='ID' bg='bg-white' onChange={handleChangeID}/>
              <ImageUpload label="Copy of Death Certificate" name='certificate' bg='bg-white' onChange={handleChangeCert}/>
            </div>
            <div className="w-200 h-62 mt-[28px]"><Button btnText="Submit Claim" btnType="submit"/></div>
          </form>
        </div>
      </div>
    </div>
  )
}