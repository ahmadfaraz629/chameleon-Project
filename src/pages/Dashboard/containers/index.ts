import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchUsersAction } from 'store/actions/user';
import { getSortedUsers, getSummary } from 'store/selectors/user';
import { IState } from 'types';
import Dashboard from 'pages/Dashboard';

const mapStateToProps = (state: IState) => {
  return {
    users: getSortedUsers(state),
    summary: getSummary(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ fetchUsers: fetchUsersAction.STARTED }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
