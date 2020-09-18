import { FETCH_USERS } from 'store/actions/types';

export const fetchUsersAction = {
  STARTED: () => ({ type: FETCH_USERS.STARTED }),
  FULLFILLED: (users: any) => ({
    type: FETCH_USERS.FULLFILLED,
    payload: users
  })
};
