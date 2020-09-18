import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';

interface ISummaryComponentProps {
  label: string;
  value: string | number;
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  typographyValue: {
    fontWeight: 'bold'
  },
  typographyLabel: {
    fontSize: '12.5px'
  }
}));

const SummaryItem: FC<ISummaryComponentProps> = ({ label, value }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography variant="subtitle1" className={classes.typographyValue}>
        {typeof value === 'number' ? <CountUp end={value} /> : value}
      </Typography>
      <Typography className={classes.typographyLabel}>{label}</Typography>
    </Paper>
  );
};

export default memo(SummaryItem);
