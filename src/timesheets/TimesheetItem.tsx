import React, { useContext } from 'react';
import { Timesheet } from './interfaces/Timesheet.interface';
import { countTimeByMinutes, getDateStr, getTimeStr } from '../utils/datetime';
import './style/timesheet-item.css';
import { Badge } from 'react-bootstrap';
import { TimesheetStatus } from './enums/TimesheetStatus.enum';
import { UsersContext } from '../index';
import { User } from '../users/interfaces/User.interface';
import { getUserFullNameById } from '../users/utils/userFullNameById';

export const TimesheetItem = ({ timesheet }: { timesheet: Timesheet }) => {
  const users: User[] = useContext(UsersContext);
  const approvalName = getUserFullNameById(
    users,
    timesheet.approvalPersonId,
    true,
  );

  const statusBg =
    timesheet.status === TimesheetStatus.approved ? 'success' : 'warning';

  const time = `${getTimeStr(timesheet.startTime)} - ${getTimeStr(
    timesheet.endTime,
  )}`;

  const breakTime = countTimeByMinutes(timesheet.breakMinutes);
  const loggedTime = `${countTimeByMinutes(timesheet.minutes)}${
    breakTime.length ? `(${breakTime} lunch)` : ''
  }`;

  return (
    <tr>
      <td>
        <Badge bg={statusBg}>{timesheet.status}</Badge>
      </td>
      <td>{approvalName}</td>
      <td>{getDateStr(timesheet.startTime)}</td>
      <td>{time}</td>
      <td>{loggedTime}</td>
    </tr>
  );
};
