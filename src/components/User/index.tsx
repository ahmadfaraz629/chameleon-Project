import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UsersTable from 'components/User/UsersTable';
import { IUser } from 'types';

interface IUserListComponentProps {
  users: IUser[];
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  }
}));

const UserListComponent: FC<IUserListComponentProps> = ({ users }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={10}>
      <UsersTable users={users} />
    </Paper>
  );
};

export default memo(UserListComponent);
