import { configureStore } from '@reduxjs/toolkit';
import { employeesApi } from '@/shared/api';
import { EmployeesReducer } from '@/entities/employee';
import { ThemeReducer } from '@/entities/theme';

export const store = configureStore({
  reducer: {
    employees: EmployeesReducer,
    theme: ThemeReducer,
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
