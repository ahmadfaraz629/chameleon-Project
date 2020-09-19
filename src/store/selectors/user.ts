import { createSelector } from 'reselect';
import get from 'lodash.get';
import { isDate } from 'utils/helper';
import { IState, IUser, ISummary, Style } from 'types';

export const getUsers = (state: IState) => state.user.users;
export const getSearchText = (state: IState) => state.user.searchText;
export const getOrder = (state: IState) => state.user.order;
export const getOrderBy = (state: IState) => state.user.orderBy;

export const getFilteredUsers = createSelector([getUsers, getSearchText], (users, searchText) => {
  return users.filter((user: IUser) => {
    return user.name.toLowerCase().startsWith(searchText.toLowerCase());
  });
});

export const getSortedUsers = createSelector([getFilteredUsers, getOrder, getOrderBy], (users, order, orderBy) => {
  return users.sort((a: IUser, b: IUser) => {
    const valueA = isDate(get(a, orderBy)) ? new Date(get(a, orderBy)).valueOf() : get(a, orderBy);
    const valueB = isDate(get(a, orderBy)) ? new Date(get(b, orderBy)).valueOf() : get(b, orderBy);

    if (order === 'asc') return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    else return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
  });
});

export const getSummary = createSelector([getUsers], (users: IUser[]) => {
  const initialSummary = {
    total_members: 0,
    published_campaigns_count: 0,
    invited_users_count: 0,
    last_created: null
  };

  // calculate the total_members , invited_users_count and published_campaigns_count in one iteration
  return users.reduce((summary: ISummary, user: IUser) => {
    if (user.style === Style.member) summary.total_members++;

    if (user.stats.invited_users_count) summary.invited_users_count += user.stats.invited_users_count;

    if (user.stats.published_campaigns_count) summary.published_campaigns_count += user.stats.published_campaigns_count;

    const created_at = new Date(user.created_at);
    if (!summary.last_created || created_at > summary.last_created) summary.last_created = created_at;

    return summary;
  }, initialSummary);
});
