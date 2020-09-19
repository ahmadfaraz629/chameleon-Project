import { ITableData } from 'types';
export const API_BASE_PATH: string = 'http://localhost:3000';

export const tableData: ITableData[] = [
  { id: 'cached_avatar', heading: '', type: 'avatar' },
  { id: 'name', heading: 'Name', type: 'string' },
  { id: 'email', heading: 'Email', type: 'string' },
  { id: 'style', heading: 'Role', type: 'string' },
  { id: 'stats.invited_users_count', heading: 'User Invited', type: 'number' },
  { id: 'stats.published_campaigns_count', heading: 'Published Campaigns', type: 'number' },
  { id: 'created_at', heading: 'Member Since', type: 'date' }
];
