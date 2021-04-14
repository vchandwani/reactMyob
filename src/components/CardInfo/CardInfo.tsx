import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: theme.spacing(2),
  },
}));

const CardInfo: React.FC = () => {
  const styles = useStyles();
  return (
    <Row data-testid="cardDiv" className={styles.root}>
      <Col xs={12} data-testid="cardCol">
        <Paper elevation={1}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </Col>
    </Row>
  );
};

export default CardInfo;
