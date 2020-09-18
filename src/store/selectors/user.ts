import { createSelector } from 'reselect';
import { IState, IUser, ISummary, Style } from 'types';

export const getUsers = (state: IState) => state.user.users;

export const getSortedUsers = createSelector([getUsers], users => {
  return users.sort((a: IUser, b: IUser) => new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf());
});

export const getSummary = createSelector([getSortedUsers], (users: IUser[]) => {
  const initialSummary = {
    total_members: 0,
    published_campaigns_count: 0,
    invited_users_count: 0,
    last_created: users.length > 0 ? new Date(users[users.length - 1].created_at) : null
  };

  // calculate the total_members , invited_users_count and published_campaigns_count in one iteration
  return users.reduce((summary: ISummary, user: IUser) => {
    if (user.style === Style.member) summary.total_members++;

    if (user.stats.invited_users_count) summary.invited_users_count += user.stats.invited_users_count;

    if (user.stats.published_campaigns_count) summary.published_campaigns_count += user.stats.published_campaigns_count;

    return summary;
  }, initialSummary);
});
