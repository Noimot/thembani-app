const LoanDetailsData =[ //To be replaced by real data from endpoint
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

export default function LoanData() {
  return (
    <div className="bg-green w-full py-[20px] rounded-5">
      <header className="bg-grey-4 flex w-full">
        <span className="w-[137px] py-[12px] text-center border-x-[2px] border-white">Month</span>
        <span className="w-[291px] py-[12px] text-center border-x-[2px] border-white">Total payment</span>
        <span className="w-[244px] py-[12px] text-center border-x-[2px] border-white">Principal</span>
        <span className="w-[231px] py-[12px] text-center border-x-[2px] border-white">Interest</span>
        <span className="w-[250px] py-[12px] text-center border-x-[2px] border-white">Unpaid balance</span>
      </header>
        {LoanDetailsData && LoanDetailsData.map(data => (
      <div className={`${data.month % 2 === 0 ? " " :"bg-grey-4"} flex w-full`} key={data.id}>
        <span className="w-[137px] py-[12px] text-center border-x-[2px] border-white">{data.month}</span>
        <span className="w-[291px] py-[12px] text-center border-x-[2px] border-white">{data.Total}</span>
        <span className="w-[244px] py-[12px] text-center border-x-[2px] border-white">{data.Principal}</span>
        <span className="w-[231px] py-[12px] text-center border-x-[2px] border-white">{data.Interest}</span>
        <span className="w-[250px] py-[12px] text-center border-x-[2px] border-white">{data.Unpaid}</span>
      </div>
        ))}
    </div>
  )
}