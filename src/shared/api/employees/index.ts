import { Employee } from '@/entities/employee/model/types';
import { Departments } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, CACHE_LIFE, usersByDepartmentEndpoint } from './constants';

export const employeesApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getUsers: build.query<{ items: Employee[] }, Departments>({
      query: usersByDepartmentEndpoint,
      keepUnusedDataFor: CACHE_LIFE,
    }),
  }),
  refetchOnMountOrArgChange: CACHE_LIFE,
});

export const { useGetUsersQuery } = employeesApi;
