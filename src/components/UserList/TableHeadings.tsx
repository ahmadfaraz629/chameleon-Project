import React, { FC, memo } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { tableData } from 'config';
import { ITableData } from 'types';

interface ITableHeadingsProps {
  order: 'asc' | 'desc';
  orderBy: string;
  setOrder: (order: any) => void;
}

const TableHeadings: FC<ITableHeadingsProps> = ({ order, orderBy, setOrder }) => {
  return (
    <TableRow>
      {tableData.map((data: ITableData) => (
        <TableCell key={data.id} align={'center'} sortDirection={orderBy === data.id ? order : false}>
          {data.type === 'avatar' ? (
            data.heading
          ) : (
            <TableSortLabel
              active={orderBy === data.id}
              direction={orderBy === data.id ? order : 'asc'}
              onClick={() => setOrder(data)}
            >
              {data.heading}
            </TableSortLabel>
          )}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default memo(TableHeadings);
