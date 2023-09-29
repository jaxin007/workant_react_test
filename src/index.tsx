import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ErrorPage } from './notFound/NotFoundPage';
import users from './db/users.json';
import timesheet from './db/timesheets.json';
import { TimesheetPage } from './timesheets/TimesheetPage';
import { Timesheet } from './timesheets/interfaces/Timesheet.interface';
import { UsersTablePage } from './users/UsersTablePage';

export const UsersContext = createContext(users);

const router = createBrowserRouter([
  {
    path: '/',
    element: <UsersTablePage />,
    loader: () => users,
    errorElement: <ErrorPage />,
  },
  {
    path: 'user/:userId/timesheet/',
    element: (
      <UsersContext.Provider value={users}>
        <TimesheetPage />
      </UsersContext.Provider>
    ),
    loader: ({ params: { userId } }) =>
      timesheet
        .filter((t: Timesheet) => t.userId === userId)
        .sort(
          (a, b) =>
            new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
        ),
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
