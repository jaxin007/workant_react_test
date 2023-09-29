import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../interfaces/User.interface';
import { ContactInfoGroup } from './ContactInfoGroup';
import { ContactInfoItem } from './ContactInfoItem';
import './styles/user-card-general-info.css';
import { Link } from 'react-router-dom';

export type UserCardGeneralInfoType = Pick<
  User,
  | 'firstName'
  | 'email'
  | 'phone'
  | 'lastName'
  | 'position'
  | 'department'
  | 'subDepartment'
  | 'division'
  | 'id'
>;

export const UserCardGeneralInfo = ({
  user,
}: {
  user: Partial<User> | UserCardGeneralInfoType;
}) => {
  return (
    <div className='user-card-info_general'>
      <div>
        <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
        <Card.Subtitle style={{ marginBottom: '0.5em' }}>
          {`${user.position}`}
        </Card.Subtitle>
        <Link to={`/user/${user.id}/timesheet`}>Open timesheet</Link>
      </div>
      <div className='user-card-text_general'>
        <div className='contact-info__section' style={{ width: '100%' }}>
          <ContactInfoGroup>
            <ContactInfoItem name='Department' value={user.department?.title} />
            <ContactInfoItem
              name='Sub-department'
              value={user.subDepartment?.title}
            />
            <ContactInfoItem name='Division' value={user.division?.title} />
          </ContactInfoGroup>
          <ContactInfoGroup>
            <ContactInfoItem name='Email' value={user.email} />
            <ContactInfoItem name='Phone' value={user.phone} />
          </ContactInfoGroup>
        </div>
      </div>
    </div>
  );
};
