import React, { useEffect, useMemo, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Timesheet } from './interfaces/Timesheet.interface';
import { Table } from 'react-bootstrap';
import { TimesheetItem } from './TimesheetItem';
import './style/timesheet.css';
import { TableTitles } from '../common/components/TableTitles';
import { TimesheetTitles as TimesheetTitlesArray } from '../common/constants/timesheet.constants';
import { getMonthYearStr } from '../utils/datetime';
import { TimesheetHeader } from './TimesheetHeader';

export const TimesheetPage = () => {
  const { userId } = useParams();
  const timesheet = useLoaderData() as Timesheet[];
  const { timesheetGrouped, lastTimesheetMonth } = useMemo(() => {
    const timesheetMap: Record<string, Timesheet[]> = {};
    let lastDate: Date = new Date(timesheet[0].startTime);

    timesheet.forEach((t) => {
      const timesheetDate = new Date(t.startTime);
      if (timesheetDate > lastDate) lastDate = timesheetDate;
      const key = getMonthYearStr(timesheetDate);
      if (key in timesheetMap) {
        timesheetMap[key].push(t);
      } else {
        timesheetMap[key] = [t];
      }
    });

    return {
      timesheetGrouped: timesheetMap,
      lastTimesheetMonth: getMonthYearStr(lastDate),
    };
  }, [timesheet]);

  const [currentMonth, setCurrentMonth] = useState(lastTimesheetMonth);
  const [currentTimesheetList, setCurrentTimesheetList] = useState(
    timesheetGrouped[currentMonth],
  );

  useEffect(() => {
    setCurrentTimesheetList(timesheetGrouped[currentMonth]);
  }, [currentMonth]);

  return (
    <>
      <Container>
        <TimesheetHeader
          userId={userId as string}
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        {currentTimesheetList && currentTimesheetList.length ? (
          <Table hover>
            <TableTitles titles={[...TimesheetTitlesArray]} />
            <tbody>
              {currentTimesheetList.map((t) => (
                <TimesheetItem timesheet={t} key={t.id} />
              ))}
            </tbody>
          </Table>
        ) : (
          <div className='no-timesheet'> no timesheet at this month</div>
        )}
      </Container>
    </>
  );
};
