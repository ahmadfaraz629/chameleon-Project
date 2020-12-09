import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchUsersAction, sortAction } from 'store/actions/user';
import { getSortedUsers } from 'store/selectors/user';
import { IState } from 'types';
import UserList from 'components/UserList';

const userMapStateToProps = (state: IState) => {
  return {
    users: getSortedUsers(state),
    order: state.user.order,
    orderBy: state.user.orderBy
  };
};

const userMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ fetchUsers: fetchUsersAction.STARTED, setOrder: sortAction.STARTED }, dispatch);
};

export default connect(userMapStateToProps, userMapDispatchToProps)(UserList);
