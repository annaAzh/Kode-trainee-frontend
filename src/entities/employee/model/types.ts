import { Departments } from '@/shared/types';

export interface Employee {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: Omit<Departments, 'all'>;
  position: string;
  birthday: string;
  phone: string;
}
