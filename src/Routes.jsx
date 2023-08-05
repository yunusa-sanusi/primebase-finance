import { createBrowserRouter } from 'react-router-dom';

import { Home, LoanDetail, RequestLoan, Root } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/request-loan',
        element: <RequestLoan />,
      },
      {
        path: '/loan/:transactionId',
        element: <LoanDetail />,
      },
    ],
  },
]);

export default router;
