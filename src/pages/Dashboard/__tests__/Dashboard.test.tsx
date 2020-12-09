// Dashboars.test.js
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Dashboard from 'pages/Dashboard';
import { DashboardProps, storeValue } from 'pages/Dashboard/fixture';

const mockStore = configureStore([]);

describe('Dashboard Snapshot Test', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(storeValue);

    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Dashboard {...DashboardProps} />
      </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
