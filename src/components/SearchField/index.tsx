import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

interface ISearchFieldProps {
  setSearchText: (text: string) => void;
  searchText: string;
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: '100%'
  }
}));

const SearchField: FC<ISearchFieldProps> = ({ setSearchText, searchText }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={10}>
      <TextField
        id="standard-multiline-flexible"
        label="Search By Name"
        className={classes.textField}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </Paper>
  );
};

export default memo(SearchField);
