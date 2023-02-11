import { LoanDetailsData } from "../../utils/helpers/data";

export default function LoanData() {
  return (
    <div className="bg-green w-full py-5 rounded-5">
      <header className="bg-grey-4 flex w-full text-dark-1">
        <span className="w-[137px] py-3 text-center border-x-2 border-white font-bold">Month</span>
        <span className="w-[300px] py-3 text-center border-x-2 border-white font-bold">Total payment</span>
        <span className="w-[244px] py-3 text-center border-x-2 border-white font-bold">Principal</span>
        <span className="w-[231px] py-3 text-center border-x-2 border-white font-bold">Interest</span>
        <span className="w-[300px] py-3 text-center border-l-2 border-white font-bold">Unpaid balance</span>
      </header>
        {LoanDetailsData && LoanDetailsData.map(data => (
      <div className={`${data.month % 2 === 0 ? " " :"bg-grey-4"} flex w-full text-dark-1`} key={data.id}>
        <span className="w-[137px] py-3 text-center border-x-2 border-white">{data.month}</span>
        <span className="w-[300px] py-3 text-center border-x-2 border-white">{data.Total}</span>
        <span className="w-[244px] py-3 text-center border-x-2 border-white">{data.Principal}</span>
        <span className="w-[231px] py-3 text-center border-x-2 border-white">{data.Interest}</span>
        <span className="w-[300px] py-3 text-center border-l-2 border-white">{data.Unpaid}</span>
      </div>
        ))}
    </div>
  )
}