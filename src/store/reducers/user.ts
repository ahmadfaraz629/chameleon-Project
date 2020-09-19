import { FETCH_USERS, SET_SORT_ORDER, SET_SEARCH_TEXT } from 'store/actions/types';
import { IAction, IUser } from 'types';

const initialState = {
  users: [] as IUser[],
  isLoading: false,
  order: 'asc',
  orderBy: 'created_at',
  searchText: ''
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
    case SET_SORT_ORDER.FULLFILLED:
      state = {
        ...state,
        order: action.payload.order,
        orderBy: action.payload.orderBy
      };
      break;
    case SET_SEARCH_TEXT:
      state = {
        ...state,
        searchText: action.payload
      };
      break;
    default:
  }
  return state;
}

export default userReducer;
