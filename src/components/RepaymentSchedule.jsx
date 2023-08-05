import { useLoanContext } from '../hooks/useLoanContext';
import LoanDetailCard from './LoanDetailCard';
import LoanScheduleTable from './LoanScheduleTable';

function RepaymentSchedule() {
  const { repaymentSchedule } = useLoanContext();
  const {
    FULL_NAME,
    TRANSACTION_ID,
    REPAYMENT_DURATION,
    CUMULATIVE_REPAYMENT_AMOUNT,
    LOAN_AMOUNT,
    DATE,
    data,
  } = repaymentSchedule;

  return (
    <section className=" text-darkBlue">
      <div className="bg-white flex justify-between items-center rounded-md p-6 mb-7 shadow-sm shadow-[#000d23]">
        <h2 className="text-3xl font-bold mb-3">{FULL_NAME}</h2>
        <div>
          <h3 className="text-2xl font-semibold">Transaction ID</h3>
          <p className="text-lg">{TRANSACTION_ID}</p>
          <small className="font-semibold">Date: {DATE}</small>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-8">
        <LoanDetailCard title="Loan Amount" detail={LOAN_AMOUNT} />
        <LoanDetailCard
          title="Cummulative Repayment Amount"
          detail={CUMULATIVE_REPAYMENT_AMOUNT}
        />
        <LoanDetailCard
          title="Repayment Duration"
          detail={`${REPAYMENT_DURATION} Months`}
        />
      </div>

      {data.length > 0 && <LoanScheduleTable loanSchedule={data} />}
    </section>
  );
}
export default RepaymentSchedule;
