import { configureStore } from '@reduxjs/toolkit';
import { employeesApi } from '@/shared/api';
import { EmployeesReducer } from '@/entities/employee';

export const store = configureStore({
  reducer: {
    employees: EmployeesReducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
