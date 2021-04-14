import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  marginTop: {
     marginTop: theme.spacing(2),
  },
}));

const CustomerData: React.FC = () => {
  const styles = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      xs={12}
      >
        <Grid xs={12} sm={6} direction="row" alignItems="center">
          <Grid xs={12} container direction="row" alignContent="center">
             1
          </Grid>  
        </Grid>  
        <Grid xs={12} sm={6} direction="row" alignItems="center">2</Grid>  
    </Grid>
  );
};

export default CustomerData;
