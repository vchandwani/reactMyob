import React from 'react';
import { Grid,Container } from '@material-ui/core';
import Header from '../components/Header/Header';
import CardInfo from '../components/CardInfo/CardInfo';

const Blog: React.FC = (): JSX.Element => (
  <Container data-testid="portalContainer" maxWidth="md">
    <Grid container direction="row" justify="center" alignItems="center" xs={12}>
      <Header title="Invoice" />
      <CardInfo />
    </Grid>
  </Container>
);
export default Blog;
