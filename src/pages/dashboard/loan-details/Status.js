import DashboardNav from "../../../components/shared/dashboard-nav";
import dollarIcon from '../../../assets/images/dollarIcon.svg'
import balanceIcon from '../../../assets/images/balanceIcon.svg'
import successIcon from '../../../assets/images/acceptIcon.svg'
import failedIcon from '../../../assets/images/removeIcon.svg'
import paidIcon from '../../../assets/images/paidIcon.svg'
import calenderIcon from '../../../assets/images/calenderIcon.svg'
import insuranceIcon from '../../../assets/images/insuranceIcon.svg'
// import rateIcon from '../../../assets/images/rateIcon.svg'
import LoanData from "../../../components/Loan/LoanData";


const loanDetailsSummary =[
  {
    id: 1,
    icon: dollarIcon,
    iconBg: "bg-orange-1",
    IconRadius: "rounded-5",
    label: "Borrowed Principle",
    value: "MZN 98 888" //To be replaced with real data
  },
  {
    id: 2,
    icon: balanceIcon,
    iconBg: "bg-orange-1",
    IconRadius: "rounded-5",
    label: "Balance Principle",
    value: "MZN 78 888" //To be replaced with real data
  },
  {
    id: 3,
    icon: successIcon,
    iconBg: "nill",
    IconRadius: "nill",
    label: "Successful Debits",
    value: 5 //To be replaced with real data
  },
  {
    id: 4,
    icon: dollarIcon,
    iconBg: "bg-blue-2",
    IconRadius: "rounded-5",
    label: "Annual Rate",
    value: "33.33%" //To be replaced with real data
  },
  {
    id: 5,
    icon: paidIcon,
    iconBg: "bg-blue-2",
    IconRadius: "rounded-[50%]",
    label: "Paid",
    value: "MZN 20 000" //To be replaced with real data
  },
  {
    id: 6,
    icon: failedIcon,
    iconBg: "nill",
    IconRadius: "nill",
    label: "Failed Debits",
    value: 0 //To be replaced with real data
  },
  {
    id: 7,
    icon: calenderIcon,
    iconBg: "bg-yellow-1",
    IconRadius: "rounded-5",
    label: "Period",
    value: "24 M" //To be replaced with real data
  },
  {
    id: 8,
    icon: calenderIcon,
    iconBg: "bg-yellow-1",
    IconRadius: "rounded-5",
    label: "Period Lapsed",
    value: "5 M" //To be replaced with real data
  },
  {
    id: 9,
    icon: insuranceIcon,
    iconBg: "bg-yellow-1",
    IconRadius: "rounded-5",
    label: "Insuarance",
    value: "Active" //To be replaced with real data
  },
]


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
        <LoanData/>
      </div>
    </div>
  )
}