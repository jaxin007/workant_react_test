import React, { useState } from 'react';
import { User } from '../interfaces/User.interface';
import { fullName, strNoLongerThen } from '../../utils/string';
import '../styles/user-table-item.css';
import { Link } from 'react-router-dom';
import { UserModal } from '../card/UserModal';

export const UserTableItem = ({ user }: { user: User }) => {
  const [show, setShow] = useState<[string, boolean]>([user.id, false]);

  const handleShow = () => setShow([user.id, true]);

  // should be defined by user.roleId
  const userRole = user.managerId ? 'Employee' : 'Manager';

  return (
    <>
      <tr>
        <td>
          <div
            className='user-general-info-section'
            onClick={() => handleShow()}
          >
            <div
              className='image'
              style={{
                backgroundImage: `url(${user.avatar.link})`,
              }}
            ></div>
            <div className='info'>
              {fullName(user.firstName, user.lastName)}
              <br />
              {user.position}
            </div>
          </div>
        </td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{userRole}</td>
        <td>{strNoLongerThen(user.department.title, 20)}</td>
        <td>
          <div className='user-table-arrow text-dark bg-white border-white'>
            <Link className='text-dark' to={`/user/${user.id}/timesheet`}>
              {'>'}
            </Link>
          </div>
        </td>
      </tr>
      <UserModal user={user} show={show} setShow={setShow} />
    </>
  );
};
