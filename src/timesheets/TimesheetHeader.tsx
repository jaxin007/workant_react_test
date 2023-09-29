import React, { useContext } from 'react';
import { Nullable, SetStateFn } from '../common/types/common.types';
import {
  dateByMonthAndYear,
  getMonthNumberByName,
  getMonthYearStr,
} from '../utils/datetime';
import './style/timesheet-header.css';
import { Button } from 'react-bootstrap';
import { User } from '../users/interfaces/User.interface';
import { UsersContext } from '../index';
import { getUserFullNameById } from '../users/utils/userFullNameById';
import { Direction } from '../common/enums/Direction.enum';

export const TimesheetHeader = ({
  userId,
  currentMonth,
  setCurrentMonth,
}: {
  userId: Nullable<string>;
  currentMonth: string;
  setCurrentMonth: SetStateFn<string>;
}) => {
  const users: User[] = useContext(UsersContext);
  const currentUserName = getUserFullNameById(users, userId as string);

  const handleSwitchMonth = (direction: Direction) => {
    setCurrentMonth((prev) => {
      const [prevMonth, prevYear] = prev.split(' ');
      const prevMonthNumber = getMonthNumberByName(prevMonth, prevYear);

      let newMonth = +prevMonthNumber;
      if (direction === Direction.next) newMonth += 1;
      if (direction === Direction.prev) newMonth -= 1;

      return `${getMonthYearStr(dateByMonthAndYear(+prevYear, newMonth - 1))}`;
    });
  };

  const actionButtonClasses = 'timesheet-arrow text-dark bg-white border-white';
  return (
    <div className='timesheet-header'>
      <div style={{ textAlign: 'center', fontWeight: 500, marginTop: '1em' }}>
        Logged hours of {currentUserName}
      </div>
      <div className='timesheet-header-actions'>
        <Button
          className={`${actionButtonClasses} prev`}
          onClick={() => handleSwitchMonth(Direction.prev)}
        >
          {' < '}
        </Button>
        <div className='timesheet-current-month text-dark'>{currentMonth}</div>
        <Button
          className={`${actionButtonClasses} next`}
          onClick={() => handleSwitchMonth(Direction.next)}
        >
          {' > '}
        </Button>
      </div>
    </div>
  );
};
