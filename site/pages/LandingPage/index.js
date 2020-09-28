import React from 'react';

import {
  Grid,
  Typography
} from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

import Countdown from '../../components/Countdown';
import Donation from '../../components/Donation';
import Explaination from '../../components/Explaination';

const LandingPage = props => {
  const dayOfPlay = new Date("Nov 11, 2020 11:00:00").getTime();

  return (
    <Grid container> {/*} spacing={3}>*/}
      <Grid item xs={12} lg={6}>
        <Explaination />
        {/* <div style={{
          backgroundColor: 'red',
          height: '300px'
        }}/> */}
      </Grid>
      <Grid container item xs={12} lg={6}>
        <Donation />
        {/* <div style={{
          backgroundColor: 'blue',
          height: '300px'
        }}/> */}
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h2">Day of Play: November 7th 11:00 AM ET</Typography>
        <Countdown dayOfPlay={dayOfPlay} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
