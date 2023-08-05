import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoanContext } from '../hooks/useLoanContext';

import Input from './Input';

const initialFormState = {
  fullName: '',
  loanAmount: '',
  repaymentDuration: '',
};

function LoanRequestForm() {
  const [inputFields, setInputFields] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { requestLoan } = useLoanContext();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await requestLoan(
      inputFields.fullName,
      inputFields.loanAmount,
      inputFields.repaymentDuration,
    );
    setIsSubmitting(false);
    setInputFields(initialFormState);
    navigate('/');
  };

  return (
    <form className="bg-white text-darkBlue rounded-md p-6 w-[90%] md:w-[50%] mx-auto">
      <Input
        value={inputFields.fullName}
        onChangeHandler={onChangeHandler}
        name="fullName"
        placeholder="Full name"
      />
      <Input
        value={inputFields.loanAmount}
        onChangeHandler={onChangeHandler}
        name="loanAmount"
        placeholder="Loan Amount"
      />
      <Input
        value={inputFields.repaymentDuration}
        onChangeHandler={onChangeHandler}
        name="repaymentDuration"
        placeholder="Repayment duration"
      />
      <button
        type="submit"
        className="w-full bg-darkBlue rounded-md py-3 text-center text-lightBlue font-semibold mt-4 hover:bg-white hover:text-darkBlue border border-[#000d23] transition-all duration-300"
        onClick={handleSubmit}
      >
        {isSubmitting ? 'Requesting Loan...' : 'Request Loan'}
      </button>
    </form>
  );
}
export default LoanRequestForm;
