import { Link } from 'react-router-dom';
import moment from 'moment';

function Loan({
  TRANSACTION_ID,
  FULL_NAME,
  LOAN_AMOUNT,
  REPAYMENT_DURATION,
  CREATED_TIME,
}) {
  const formattedDate = moment(CREATED_TIME).fromNow();

  return (
    <Link
      to={`/loan/${TRANSACTION_ID}`}
      className="w-full py-3 px-4 bg-white hover:bg-darkBlue text-darkBlue hover:text-lightBlue shadow-sm shadow-[#000d23] rounded-md flex justify-between transition-all duration-300 text-sm font-semibold"
    >
      <p className="w-[30%] sm:w-[40%]">{FULL_NAME}</p>
      <p className="w-15% sm:w-[20%]">${LOAN_AMOUNT}</p>
      <p className="w-15% sm:w-[20%]">{REPAYMENT_DURATION} MTHs</p>
      <small className="w-[15%] text-right">{formattedDate}</small>
    </Link>
  );
}
export default Loan;
