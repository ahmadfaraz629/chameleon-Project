import { put, call, takeLatest, select } from 'redux-saga/effects';
import { fetchUsersAction, sortAction } from 'store/actions/user';
import { FETCH_USERS, SET_SORT_ORDER } from 'store/actions/types';
import API from 'api';
import { IAction } from 'types';

////////////// Handlers ///////////////////////
function* fetchUsersHandler() {
  try {
    const resp = yield call(API.fetchUsers);
    yield put(fetchUsersAction.FULLFILLED(resp.data));
  } catch (error) {}
}

function* sortUserListHandler(action: IAction) {
  const order: 'asc' | 'desc' = yield select(state => state.user.order);
  const orderBy: string = yield select(state => state.user.orderBy);
  const newOrder: { order: 'asc' | 'desc'; orderBy: string } = {
    orderBy: action.payload.id,
    order: orderBy === action.payload.id ? (order === 'asc' ? 'desc' : 'asc') : 'asc'
  };
  yield put(sortAction.FULLFILLED(newOrder));
}

////////////// Watchers ///////////////////////
export function* watcherUser() {
  yield takeLatest(FETCH_USERS.STARTED, fetchUsersHandler);
  yield takeLatest(SET_SORT_ORDER.STARTED, sortUserListHandler);
}

export const sagas = [watcherUser];
