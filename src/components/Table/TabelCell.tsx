import React, { FC, memo } from 'react';
import { TableCell } from '@material-ui/core';

const Cell: FC<any> = ({ children }) => <TableCell style={{ textAlign: 'center' }}>{children}</TableCell>;

export default memo(Cell);
