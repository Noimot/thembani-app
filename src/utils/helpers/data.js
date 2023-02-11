import dollarIcon from '../../assets/images/dollarIcon.svg';
import balanceIcon from '../../assets/images/balanceIcon.svg';
import successIcon from '../../assets/images/acceptIcon.svg';
import failedIcon from '../../assets/images/removeIcon.svg';
import paidIcon from '../../assets/images/paidIcon.svg';
import calenderIcon from '../../assets/images/calenderIcon.svg';
import insuranceIcon from '../../assets/images/insuranceIcon.svg';

export const loanDetailsSummary = [
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



  export const LoanDetailsData =[ //To be replaced by real data from endpoint
  {
    id: 0,
    month: 0,
    Total: null,
    Principal: null,
    Interest: null,
    Unpaid: "MZN 98 888"
  },
  {
    id: 1,
    month: 1,
    Total: "MZN 98 888",
    Principal: "MZN 98 888",
    Interest: "MZN 98 888",
    Unpaid: "MZN 98 888"
  },
  {
    id: 2,
    month: 2,
    Total: "MZN 98 888",
    Principal: "MZN 98 888",
    Interest: "MZN 98 888",
    Unpaid: "MZN 98 888"
  },
  {
    id: 3,
    month: 3,
    Total: null,
    Principal: null,
    Interest: null,
    Unpaid: null
  },
]
