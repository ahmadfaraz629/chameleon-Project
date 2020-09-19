import { FETCH_USERS, SET_SORT_ORDER, SET_SEARCH_TEXT } from 'store/actions/types';
import { IUser, ITableData } from 'types';

export const fetchUsersAction = {
  STARTED: () => ({ type: FETCH_USERS.STARTED }),
  FULLFILLED: (users: IUser) => ({
    type: FETCH_USERS.FULLFILLED,
    payload: users
  })
};

export const sortAction = {
  STARTED: (order: ITableData) => ({ type: SET_SORT_ORDER.STARTED, payload: order }),
  FULLFILLED: (order: { order: 'asc' | 'desc'; orderBy: string }) => ({
    type: SET_SORT_ORDER.FULLFILLED,
    payload: order
  })
};

export const setSearchTextAction = (text: string) => ({ type: SET_SEARCH_TEXT, payload: text });
