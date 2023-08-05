import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const LoanScheduleTable = ({ loanSchedule }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'TRANSACTION_ID', //access nested data with dot notation
        header: 'Transaction ID',
        size: 150,
      },
      {
        accessorKey: 'LOAN_BALANCE',
        header: 'Loan Balance ($)',
        size: 150,
      },
      {
        accessorKey: 'MONTH_COUNT', //normal accessorKey
        header: 'Month Count',
        size: 200,
      },
      {
        accessorKey: 'EXPECTED_REPAYMENT_AMOUNT',
        header: 'Expected Repayment Amt ($)',
        size: 150,
      },
      {
        accessorKey: 'INTEREST',
        header: 'Interest ($)',
        size: 150,
      },
      {
        accessorKey: 'TOTAL_REPAYMENT_AMOUNT',
        header: 'Total Repayment Amt ($)',
        size: 150,
      },
    ],
    [],
  );

  return <MaterialReactTable columns={columns} data={loanSchedule} />;
};

export default LoanScheduleTable;
