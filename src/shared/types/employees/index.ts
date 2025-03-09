import { Departments } from '../departments';

export interface Employees {
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
