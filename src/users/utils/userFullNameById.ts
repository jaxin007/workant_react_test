import { fullName } from '../../utils/string';
import { User } from '../interfaces/User.interface';
import { Nullable } from '../../common/types/common.types';

export const getUserFullNameById = (
  users: User[],
  searchId: Nullable<string>,
  searchInManager: boolean = false,
) => {
  let resultName: string = 'No Name';
  if (!searchId) return resultName;

  const foundUser = users.find((u) => {
    if (u.id === searchId) return u;
    if (searchInManager && u.manager?.id === searchId) return u;
    return null;
  });

  if (foundUser) {
    if (searchId === foundUser.id) {
      resultName = fullName(foundUser.firstName, foundUser.lastName);
    }
    if (
      searchInManager &&
      searchId !== foundUser.id &&
      foundUser.manager &&
      foundUser.manager.id === searchId
    ) {
      resultName = fullName(
        foundUser.manager.firstName,
        foundUser.manager.lastName,
      );
    }
  }

  return resultName;
};
