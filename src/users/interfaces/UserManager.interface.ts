import { Nullable } from '../../common/types/common.types';
import { UserAvatar } from './UserAvatar.interface';

export interface UserManager {
  id: string;
  firstName: string;
  lastName: string;
  archivedAt: Nullable<string>;
  email: string;
  phone: string;
  position: string;
  avatar: Nullable<UserAvatar>;
}
