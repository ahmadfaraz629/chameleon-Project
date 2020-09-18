import React, { FC, memo } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from 'components/Table/TabelCell';

interface IUserListComponentProps {
  headings: string[];
  rows: any;
}

const TableComponent: FC<IUserListComponentProps> = ({ headings, rows }) => {
  return (
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          {headings.map((heading: string, index: number) => (
            <TableCell key={index}>{heading}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};

export default memo(TableComponent);
