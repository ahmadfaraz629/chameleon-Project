import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SearchContainer from 'pages/Dashboard/containers/search';
import UserContainer from 'pages/Dashboard/containers/userList';
import SummaryContainer from 'pages/Dashboard/containers/summary';

interface IDashboardProps {
  fetchUsers: () => void;
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(5)
  }
}));

const Dashboard: FC<IDashboardProps> = ({ fetchUsers }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Container className={classes.container}>
        <SummaryContainer />
        <SearchContainer />
        <UserContainer />
      </Container>
    </>
  );
};

export default Dashboard;
