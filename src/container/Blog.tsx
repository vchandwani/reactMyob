import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import Header from '../components/Header/Header';
import CardInfo from '../components/CardInfo/CardInfo';

const Blog: React.FC = (): JSX.Element => (
  <Container data-testid="portalContainer">
    <Grid container direction="row" justify="center" alignItems="center">
      <Row>
        <Col xs={12}>
          <Header title="Test" />
          <CardInfo />
        </Col>
      </Row>
    </Grid>
  </Container>
);
export default Blog;
