// Dashboars.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from 'pages/Dashboard';
import { DashboardProps } from 'pages/Dashboard/fixture';

test('Dashboard Snapshot Test', () => {
  const component = renderer.create(<Dashboard {...DashboardProps}></Dashboard>);

  let dashboard = component.toJSON();
  expect(dashboard).toMatchSnapshot();
});
