import React, { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import get from 'lodash.get';
import { IUser, ITableData } from 'types';
import { getDate } from 'utils/helper';
import { tableData } from 'config';

interface ITableBodyRowsProps {
  users: IUser[];
}

const TableBodyRows: FC<ITableBodyRowsProps> = ({ users }) => {
  return (
    <>
      {users.map((user: IUser) => (
        <TableRow hover key={user.id}>
          {tableData.map((data: ITableData) => (
            <TableCell key={data.id} align={'center'}>
              {data.type === 'string' && get(user, data.id)}
              {data.type === 'number' && (get(user, data.id) ? get(user, data.id) : 0)}
              {data.type === 'avatar' && <Avatar alt={user.name} src={get(user, data.id)} />}
              {data.type === 'date' && getDate(get(user, data.id))}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default TableBodyRows;
