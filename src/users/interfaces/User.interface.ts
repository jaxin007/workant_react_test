import { Nullable } from '../../common/types/common.types';
import { UserManager } from './UserManager.interface';
import { UserAvatar } from './UserAvatar.interface';
import { UserDepartment } from './UserDepartment.interface';
import { UserSubDepartment } from './UserSubDepartment.interface';
import { UserDivision } from './UserDivision.interface';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  phone: string;
  roleId: number;
  managerId: Nullable<string>;
  address: Nullable<string>;
  postalCode: Nullable<string | number>;
  city: Nullable<string>;
  country: Nullable<string>;
  subDepartment: Nullable<UserSubDepartment>;
  manager: Nullable<UserManager>;
  avatar: UserAvatar;
  department: UserDepartment;
  group: Nullable<string>;
  division: Nullable<UserDivision>;
}
