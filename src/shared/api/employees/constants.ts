import { Departments } from '@/shared/types';

export const BASE_URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/';
export const QUANTITY_MINUTES = 5;
export const SEC_PER_MINUTE = 60;
export const CACHE_LIFE = QUANTITY_MINUTES * SEC_PER_MINUTE;

export const errorEndpoint = () => 'users?__code=500&__dynamic=true';
export const usersByDepartmentEndpoint = (department: Departments) => `users?__example=${department}`;
