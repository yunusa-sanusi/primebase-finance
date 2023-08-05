import { createContext, useState } from 'react';
import axios from 'axios';

export const LoanContext = createContext({});

const url = 'https://okigwecreations.online/api/';

export const LoanProvider = ({ children }) => {
  const [loans, setLoans] = useState([]);
  const [repaymentSchedule, setRepaymentSchedule] = useState({});
  const [loading, setLoading] = useState(true);

  const getAllLoans = async () => {
    const response = await axios.post(
      url,
      {
        action: 'get_all_loan_request',
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const { data: loanData } = await response.data;
    setLoans(loanData);
    setLoading(false);
  };

  const getRepaymentSchedule = async (transactionId) => {
    const response = await axios.post(
      url,
      {
        action: 'get_repayment_schedule',
        transaction_id: transactionId,
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    const data = await response.data;
    console.log(data);
    setRepaymentSchedule(data);
    setLoading(false);
  };

  const requestLoan = async (fullName, loanAmount, repaymentDuration) => {
    try {
      const response = await axios.post(
        url,
        {
          action: 'request_for_loan',
          full_name: fullName,
          loan_amount: loanAmount,
          repayment_duration: repaymentDuration,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const { data } = await response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoanContext.Provider
      value={{
        loans,
        repaymentSchedule,
        loading,
        getAllLoans,
        getRepaymentSchedule,
        requestLoan,
      }}
    >
      {children}
    </LoanContext.Provider>
  );
};
