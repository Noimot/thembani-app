export default function LoanData({ LoanDetailsData, principal }) {
  return (
    <div className="bg-green w-full py-5 rounded-5">
      <header className="bg-grey-4 flex w-full text-dark-1">
        <span className="w-[137px] py-3 text-center border-x-2 border-white font-bold">
          Month
        </span>
        <span className="w-[300px] py-3 text-center border-x-2 border-white font-bold">
          Total payment
        </span>
        <span className="w-[244px] py-3 text-center border-x-2 border-white font-bold">
          Principal
        </span>
        <span className="w-[231px] py-3 text-center border-x-2 border-white font-bold">
          Interest
        </span>
        <span className="w-[300px] py-3 text-center border-l-2 border-white font-bold">
          Unpaid balance
        </span>
      </header>
      {LoanDetailsData &&
        LoanDetailsData.map((data, index) => (
          <div
            className={`${
              index % 2 === 0 ? " " : "bg-grey-4"
            } flex w-full text-dark-1`}
            key={index}
          >
            <span className="w-[137px] py-3 text-center border-x-2 border-white">
              {index + 1}
            </span>
            <span className="w-[300px] py-3 text-center border-x-2 border-white">
              {`MZN ${data.MonthlyRepayment}`}
            </span>
            <span className="w-[244px] py-3 text-center border-x-2 border-white">
            {`MZN ${data.Principal}`}
            </span>
            <span className="w-[231px] py-3 text-center border-x-2 border-white">
            {`MZN ${data.Interest}`}
            </span>
            <span className="w-[300px] py-3 text-center border-l-2 border-white">
            {`MZN ${data.BookBalance}`}
            </span>
          </div>
        ))}
    </div>
  );
}
