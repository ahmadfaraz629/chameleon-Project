import { connect } from 'react-redux';

import { getSummary } from 'store/selectors/user';
import { IState } from 'types';
import Summary from 'components/Summary';

const summaryMapStateToProps = (state: IState) => {
  return {
    summary: getSummary(state)
  };
};

export default connect(summaryMapStateToProps, null)(Summary);
