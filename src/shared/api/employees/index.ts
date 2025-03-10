import { Employee } from '@/entities/employee/model/types';
import { Departments } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/';
const QUANTITY_MINUTES = 5;
const SEC_PER_MINUTE = 60;
const CACHE_LIFE = QUANTITY_MINUTES * SEC_PER_MINUTE;

export const employeesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getUsers: build.query<{ items: Employee[] }, Departments>({
      query: (department) => `users?__example=${department}`,
      keepUnusedDataFor: CACHE_LIFE,
    }),
  }),
  refetchOnMountOrArgChange: CACHE_LIFE,
});

export const { useGetUsersQuery } = employeesApi;
