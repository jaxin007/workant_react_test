import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { User } from './interfaces/User.interface';
import { Table } from 'react-bootstrap';
import { TableTitles } from '../common/components/TableTitles';
import { UsersTableTitles } from '../common/constants/users.constants';
import { UserTableItem } from './table/UserTableItem';
import './styles/users-table.css';

export const UsersTablePage = () => {
  const users = useLoaderData() as User[];

  return (
    <>
      <Container>
        <Table hover>
          <TableTitles
            classNames='users-table-header'
            titles={[...UsersTableTitles]}
          />
          <tbody>
            {users.map((user) => (
              <UserTableItem user={user} key={user.id} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
