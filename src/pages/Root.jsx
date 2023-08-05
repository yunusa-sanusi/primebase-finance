import { Outlet, NavLink, Link } from 'react-router-dom';

function Root() {
  const active =
    'font-semibold mx-3 text-white hover:text-lightBlue transition-all duration-300';
  const link =
    'font-semibold mx-3 text-lightBlue hover:text-white transition-all duration-300';

  return (
    <>
      <header className="bg-darkBlue py-4 px-6 md:px-3 sticky top-0">
        <nav className="w-[90%] md:w-[1024px] flex justify-between mx-auto">
          <Link to="/" className="text-lightBlue text-2xl font-bold">
            Prime
            <span className="text-darkBlue bg-lightBlue py-1 px-2 rounded-md ml-1">
              Base
            </span>
          </Link>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : link)}
            >
              Loans
            </NavLink>
            <NavLink
              to="/request-loan"
              className={({ isActive }) => (isActive ? active : link)}
            >
              Request Loan
            </NavLink>
          </ul>
        </nav>
      </header>
      <div className="w-[90%] md:w-[1024px] mx-auto py-6 px-6 md:px-3">
        <Outlet />
      </div>
    </>
  );
}

export default Root;
