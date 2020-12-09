import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchUsersAction } from 'store/actions/user';

import Dashboard from 'pages/Dashboard';

const dashboardMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ fetchUsers: fetchUsersAction.STARTED }, dispatch);
};

export default connect(null, dashboardMapDispatchToProps)(Dashboard);
