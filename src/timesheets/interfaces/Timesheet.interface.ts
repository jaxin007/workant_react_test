import { Nullable } from '../../common/types/common.types';

export interface Timesheet {
  id: string;
  assessment: number;
  breakMinutes: number;
  minutes: number;
  startTime: string;
  endTime: string;
  note: Nullable<string>;
  status: string;
  locationChecked: boolean;
  approvalPersonId: Nullable<string>;
  userId: string;
  companyId: string;
}
