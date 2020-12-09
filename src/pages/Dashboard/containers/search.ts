import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setSearchTextAction } from 'store/actions/user';
import { IState } from 'types';

import SearchField from 'components/SearchField';

const searchMapStateToProps = (state: IState) => {
  return {
    searchText: state.user.searchText
  };
};

const searchMapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ setSearchText: setSearchTextAction }, dispatch);
};

export default connect(searchMapStateToProps, searchMapDispatchToProps)(SearchField);
