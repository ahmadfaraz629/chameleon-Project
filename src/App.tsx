import React, { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store';
import DasboardContainer from 'pages/Dashboard/containers';

export const store = configureStore();

const App: FC = () => {
  return (
    <Provider store={store}>
      <DasboardContainer />
    </Provider>
  );
};

export default App;
