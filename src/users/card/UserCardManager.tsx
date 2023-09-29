import React from 'react';
import { UserCardImage } from './UserCardImage';
import { UserManager } from '../interfaces/UserManager.interface';
import { ContactInfoGroup } from './ContactInfoGroup';
import { ContactInfoItem } from './ContactInfoItem';
import { Nullable } from '../../common/types/common.types';
import './styles/user-card-manager.css';

export const UserCardManager = ({
  manager,
}: {
  manager: Nullable<UserManager>;
}) => {
  if (!manager) return <></>;

  return (
    <div className='user-card-manager__wrapper'>
      <div className='user-card-manager__inner bg-white'>
        <div className='user-card-manager-info'>
          <div className='user-card-manager-info-title'>
            Manager:
            {` ${manager.firstName} ${manager.lastName}`}
          </div>
          <div>
            <ContactInfoGroup>
              <ContactInfoItem name='Position' value={manager.position} />
              <ContactInfoItem name='Email' value={manager.email} />
              <ContactInfoItem name='Phone' value={manager.phone} />
            </ContactInfoGroup>
          </div>
        </div>
        <UserCardImage url={manager.avatar?.link} classNames='manager-image' />
      </div>
    </div>
  );
};
