import DashboardNav from "../../components/shared/dashboard-nav";
import bookIcon from '../../assets/images/bookIcon.svg'
import interestArrowIcon from '../../assets/images/interestArrowIcon.svg'
import clockIcon from '../../assets/images/clockIcon.svg'
import DoughnutChart from "../../components/charts/DoughnutChart";
import CustomerBasicDetails from "../../components/shared/customer-basic-details";


export default function LoanStats() {
  return (
    <div className="w-full flex flex-col bg-white gap-y-8">
      <DashboardNav heading="Dashboard" subHeading="Loan Stats"/>
      <div className="flex flex-col gap-[18px]">
        <CustomerBasicDetails />
        <div className="flex gap-[2%]">
          <div className="w-[45%] bg-green rounded-5 flex flex-col gap-[18px] items-center justify-center">
            <DoughnutChart/>
          </div>
          <div className="w-[53%] flex flex-col gap-[13px]">
            <div className="flex justify-between w-full px-[27px] py-[20px] rounded-5 bg-green items-center">
              <div className="flex flex-col gap-[13px]">
                <span className="text-[20px] font-[500] text-dark-1">Amount Due</span>
                <span className="text-[26px] font-[500] text-grey-5">MZN 5 493.7</span>
                <span className="text-[16px] font-[500] text-dark-1">On May 26, 2022</span>
              </div>
              <div className="h-[81px] w-[81px] rounded-[50%] bg-yellow-1 opacity-50 flex items-center justify-center">
                <img src={bookIcon} alt="" />
              </div>
            </div>
            <div className="flex justify-between w-full px-[27px] py-[20px] rounded-5 bg-green items-center">
              <div className="flex flex-col gap-[13px]">
                <span className="text-[20px] font-[500] text-dark-1">Interest</span>
                <span className="text-[26px] font-[500] text-grey-5">33.3%</span>
                <span className="text-[16px] font-[500] text-dark-1">Annual Interest rate</span>
              </div>
              <div className="h-[81px] w-[81px] rounded-[50%] bg-blue-2 opacity-50 flex items-center justify-center">
                <img src={interestArrowIcon} alt="" />
              </div>
            </div>
            <div className="flex justify-between w-full px-[27px] py-[20px] rounded-5 bg-green items-center">
              <div className="flex flex-col gap-[13px]">
                <span className="text-[20px] font-[500] text-dark-1">Period</span>
                <span className="text-[26px] font-[500] text-grey-5">24 Months</span>
                <span className="text-[16px] font-[500] text-dark-1">19 months left</span>
              </div>
              <div className="h-[81px] w-[81px] rounded-[50%] bg-orange-1 opacity-50 flex items-center justify-center">
                <img src={clockIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}