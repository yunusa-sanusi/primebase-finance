import { useContext } from 'react';

import { LoanContext } from '../contexts/LoanContext';

export const useLoanContext = () => useContext(LoanContext);
