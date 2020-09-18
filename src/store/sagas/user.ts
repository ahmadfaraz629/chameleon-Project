import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchUsersAction } from 'store/actions/user';
import { FETCH_USERS } from 'store/actions/types';
import API from 'api';

////////////// Handlers ///////////////////////
function* fetchUsersHandler() {
  try {
    const resp = yield call(API.fetchUsers);
    yield put(fetchUsersAction.FULLFILLED(resp.data));
  } catch (error) {}
}

////////////// Watchers ///////////////////////
export function* watcherUser() {
  yield takeLatest(FETCH_USERS.STARTED, fetchUsersHandler);
}

export const sagas = [watcherUser];
