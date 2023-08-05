import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useLoanContext } from '../hooks/useLoanContext';
import Loader from '../components/Loader';
import RepaymentSchedule from '../components/RepaymentSchedule';

function LoanDetail() {
  const { transactionId } = useParams();
  const { loading, getRepaymentSchedule } = useLoanContext();

  useEffect(() => {
    getRepaymentSchedule(transactionId);
  }, [transactionId]);

  return <section>{loading ? <Loader /> : <RepaymentSchedule />}</section>;
}

export default LoanDetail;
