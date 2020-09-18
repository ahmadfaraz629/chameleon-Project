import { all } from 'redux-saga/effects';
import { watcherUser } from 'store/sagas/user';

export default function* rootSaga() {
  const sagas = [watcherUser()];
  yield all(sagas);
}
