import { FETCH_USERS } from 'store/actions/types';
import { IAction, IUser } from 'types';

const initialState = {
  users: [] as IUser[],
  isLoading: false
};

function userReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case FETCH_USERS.STARTED:
      state = {
        ...state,
        isLoading: true
      };
      break;
    case FETCH_USERS.FULLFILLED:
      state = {
        ...state,
        users: action.payload,
        isLoading: false
      };
      break;
    default:
  }
  return state;
}

export default userReducer;
