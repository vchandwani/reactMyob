import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  headerFont: {
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      fontWeight: 600,
    },
  },
}));

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const styles = useStyles();
  return (
    <Grid
      data-testid="notificationDiv"
      className={styles.root}
      container
      direction="row"
    >
      <Grid xs={12} item data-testid="notificaitonCol">
        <Typography component="h4" variant="h4" className={styles.headerFont}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
