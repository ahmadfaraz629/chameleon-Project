import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SummaryComponent from 'components/Summary';
import UsersComponent from 'components/User';
import { IUser, ISummary } from 'types';

interface IDashboardProps {
  fetchUsers: () => void;
  summary: ISummary;
  users: IUser[];
}

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(5)
  }
}));

const Dashboard: FC<IDashboardProps> = ({ fetchUsers, summary, users }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <Container className={classes.container}>
        <SummaryComponent summary={summary} />
        <UsersComponent users={users} />
      </Container>
    </>
  );
};

export default Dashboard;
