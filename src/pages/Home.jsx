import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useLoanContext } from '../hooks/useLoanContext';
import Loans from '../components/Loans';
import Loader from '../components/Loader';

function Home() {
  const { loans, loading, getAllLoans } = useLoanContext();
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  // pagination
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = loans.length > 0 && loans.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(loans.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % loans.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    getAllLoans();
  }, []);

  return (
    <main>
      <h2 className="font-semibold text-2xl mb-5">All Loans</h2>
      {loading ? <Loader /> : <Loans currentItems={currentItems} />}
      {currentItems.length > 0 && (
        <ReactPaginate
          containerClassName="pagination-container"
          pageLinkClassName="pagination-element"
          activeLinkClassName="active-page"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </main>
  );
}

export default Home;
