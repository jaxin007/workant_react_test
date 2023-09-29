import React from 'react';
import { User } from '../interfaces/User.interface';
import { Card } from 'react-bootstrap';
import { UserCardImage } from './UserCardImage';
import { UserCardGeneralInfo } from './UserCardGeneralInfo';
import { UserCardManager } from './UserCardManager';

export const UserCard = ({ user }: { user: User }) => {
  return (
    <Card style={{ margin: '1em auto' }} className='text-dark bg-light'>
      <Card.Body style={{ display: 'flex', flexDirection: 'row' }}>
        <UserCardImage url={user.avatar.link} classNames='main-card-image' />
        <div className='user-card-info__wrapper'>
          <UserCardGeneralInfo user={user} />
          <UserCardManager manager={user.manager} />
        </div>
      </Card.Body>
    </Card>
  );
};
