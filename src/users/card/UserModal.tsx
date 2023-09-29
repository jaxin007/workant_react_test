import { Button, Modal } from 'react-bootstrap';
import { SetStateFn } from '../../common/types/common.types';
import React from 'react';
import { User } from '../interfaces/User.interface';
import { UserCard } from './UserCard';

export const UserModal = ({
  user,
  show,
  setShow,
}: {
  user: User;
  show: [string, boolean];
  setShow: SetStateFn<[string, boolean]>;
}) => {
  const handleClose = () => setShow([show[0], false]);

  return (
    <Modal
      dialogClassName='user-modal'
      size='lg'
      show={show[1]}
      onHide={handleClose}
      style={{ boxSizing: 'border-box', padding: '0.5em' }}
    >
      <UserCard user={user} />
      <Button
        className='close-button bg-white text-danger border-white lead-text'
        onClick={handleClose}
      >
        &#x2715;
      </Button>
    </Modal>
  );
};
