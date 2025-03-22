import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from '@/shared/types';
import { EmployeesPage } from '@/pages/employeesPage/EmployeesPage';
import { EmployeePage } from '@/pages/employeePage/EmployeePage';
import { NotFound } from '@/pages/notFound/NotFound';
import { ErrorPage } from '@/pages/errorPage/ErrorPage';

const router = createBrowserRouter(
  [
    {
      path: Paths.HOME,
      element: <EmployeesPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: Paths.EMPLOYEE,
      element: <EmployeePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: Paths.NOT_FOUND,
      element: <NotFound />,
    },
    {
      path: Paths.NOT_FOUND_ALL,
      element: <NotFound />,
    },
  ],
  {
    basename: '/Kode-trainee-frontend/',
  },
);

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
