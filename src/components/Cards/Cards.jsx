import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              المصابين
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              عدد الحالات النشطة من فيروس الكورونا
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              الحالات التي تم شفائها
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              عدد الحالات التي تم شفائها من فيروس الكورونا
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              الموتى
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              عدد الموتى من فيروس الكورونا
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
