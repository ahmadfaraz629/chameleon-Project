import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableHeadings from 'components/UserList/TableHeadings';
import TableBodyRows from 'components/UserList/TableBodyRows';
import { IUser } from 'types';

interface IUserListComponentProps {
  users: IUser[];
  order: 'asc' | 'desc';
  orderBy: string;
  setOrder: () => void;
}

const useStyles = makeStyles(theme => ({
  container: {
    maxHeight: 700
  },
  root: {
    marginTop: theme.spacing(3)
  }
}));

const UserListComponent: FC<IUserListComponentProps> = ({ users, order, orderBy, setOrder }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={10}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableHeadings order={order} orderBy={orderBy} setOrder={setOrder} />
          </TableHead>
          <TableBody>
            <TableBodyRows users={users} />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default memo(UserListComponent);
