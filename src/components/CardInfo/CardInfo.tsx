import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CustomerData from '../CustomerData/CustomerData';

const useStyles = makeStyles((theme) => ({
  marginTop: {
     marginTop: theme.spacing(2),
  },
}));

const CardInfo: React.FC = () => {
  const styles = useStyles();
  return (
    <Grid xs={12} direction="row" container>
      <Grid data-testid="cardDiv" container direction="row">
        <Grid xs={12} data-testid="cardCol">
          <Paper elevation={1}>
            <Card>
              <CustomerData /> 
            </Card>
          </Paper>
        </Grid>
      </Grid>
      <Grid container
        direction="row"
        justify="flex-end"
        alignItems="center" className={styles.marginTop}>
          <Grid xs={12} md={3}>Test</Grid>
      </Grid>
    </Grid>
  );
};

export default CardInfo;
