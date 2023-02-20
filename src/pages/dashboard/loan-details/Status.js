import DashboardNav from "../../../components/shared/dashboard-nav";
// import rateIcon from '../../../assets/images/rateIcon.svg'
import LoanData from "../../../components/Loan/LoanData";
import { loanDetailsSummary } from "../../../utils/helpers/data";
import { LoanDetailsData } from "../../../utils/helpers/data";


export default function Status() {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Loan Details" subHeading="Status"/>
      <div className="mb-[50px] flex flex-col gap-[13px]">
        <div className="bg-green w-full flex flex-wrap justify-between p-[20px] rounded-5">
        {loanDetailsSummary && loanDetailsSummary.map(detail => (
          <div className="flex justify-between w-[32%] items-center border-b-[1px] py-[12px]" key={detail.id}>
            <div className="flex gap-[12px] items-center">
              <div className={`${detail.IconRadius === "nill" ? '': detail.IconRadius } h-[40px] w-[40px] flex justify-center items-center ${detail.iconBg}`}>
                <img src={detail.icon} alt="" />
              </div>
              <span>{detail.label}</span>
            </div>
            <span className={`${detail.value === "Active" ? "text-[#009B72] font-[600]": ''}`}>{detail.value}</span>
          </div>
        ))}
        </div>
        <LoanData LoanDetailsData={LoanDetailsData} />
      </div>
    </div>
  )
}