import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from '@/shared/types';
import { EmployeesPage } from '@/pages/employeesPage/EmployeesPage';
import { EmployeePage } from '@/pages/employeePage/EmployeePage';
import { NotFound } from '@/pages/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <EmployeesPage />,
  },
  {
    path: Paths.EMPLOYEE,
    element: <EmployeePage />,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: Paths.NOT_FOUND_ALL,
    element: <NotFound />,
  },
]);

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
