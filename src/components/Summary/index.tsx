import React, { FC, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import SummaryItem from 'components/Summary/SummaryItem';
import { ISummary } from 'types';
import { getDate } from 'utils/helper';

interface ISummaryComponentProps {
  summary: ISummary;
}

const SummaryComponent: FC<ISummaryComponentProps> = ({ summary }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
        <SummaryItem label="Team Member" value={summary.total_members} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <SummaryItem label="Last User added" value={getDate(summary.last_created)} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <SummaryItem label="Users Invited" value={summary.invited_users_count} />
      </Grid>
      <Grid item xs={6} sm={3}>
        <SummaryItem label="Published Campaigns" value={summary.published_campaigns_count} />
      </Grid>
    </Grid>
  );
};

export default memo(SummaryComponent);
