import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import Table from 'components/Table';
import TableCell from 'components/Table/TabelCell';
import { IUser } from 'types';
import { getDate } from 'utils/helper';

interface IUsersTableProps {
  users: IUser[];
}

const useStyles = makeStyles({
  container: {
    maxHeight: 700
  }
});

const UsersTable: FC<IUsersTableProps> = ({ users }) => {
  const classes = useStyles();
  const headings = ['', 'Name', 'Email', 'Role', 'User Invited', 'Published Campaigns', 'Member Since'];
  const tableRows = users.map((user: IUser) => (
    <TableRow hover key={user.id}>
      <TableCell>
        <Avatar alt={user.name} src={user.cached_avatar} />
      </TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.style}</TableCell>
      <TableCell>{user.stats.invited_users_count}</TableCell>
      <TableCell>{user.stats.published_campaigns_count || 0}</TableCell>
      <TableCell>{getDate(user.created_at)}</TableCell>
    </TableRow>
  ));
  return (
    <TableContainer className={classes.container}>
      <Table headings={headings} rows={tableRows}></Table>
    </TableContainer>
  );
};

export default memo(UsersTable);
