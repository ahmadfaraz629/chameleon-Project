import { createSelector } from 'reselect';
import { IState, IUser, ISummary, Style } from 'types';

export const getUsers = (state: IState) => state.user.users;

export const getSortedUsers = createSelector([getUsers], users => {
  return users.sort((a: IUser, b: IUser) => {
    let dateA: any = new Date(a.created_at);
    let dateB: any = new Date(b.created_at);
    return dateA - dateB;
  });
});

export const getSummary = createSelector([getSortedUsers], (users: IUser[]) => {
  const initialSummary = {
    total_members: 0,
    published_campaigns_count: 0,
    invited_users_count: 0,
    last_created: null
  };

  return users.reduce((summary: ISummary, user: IUser) => {
    if (user.style === Style.member) summary.total_members++;
    if (user.stats.invited_users_count) summary.invited_users_count += user.stats.invited_users_count;

    if (user.stats.published_campaigns_count) summary.published_campaigns_count += user.stats.published_campaigns_count;

    summary.last_created = new Date(user.created_at);
    return summary;
  }, initialSummary);
});
