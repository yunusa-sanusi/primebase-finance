import Loan from './Loan';

function Loans({ currentItems }) {
  return (
    <section>
      <div className="flex flex-col gap-y-6">
        {currentItems.length > 0 &&
          currentItems.slice(0, 10).map((loan) => {
            return <Loan key={loan.ID} {...loan} />;
          })}
      </div>
    </section>
  );
}
export default Loans;
