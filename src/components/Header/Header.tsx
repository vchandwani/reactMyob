import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2),
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
    <Row data-testid="notificationDiv" className={styles.root}>
      <Col xs={12} data-testid="notificaitonCol">
        <Typography component="h4" variant="h4" className={styles.headerFont}>
          {title}
        </Typography>
      </Col>
    </Row>
  );
};

export default Header;
