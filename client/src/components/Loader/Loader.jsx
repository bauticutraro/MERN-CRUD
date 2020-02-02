import React from 'react';
import { Grid, Container, CircularProgress } from '@material-ui/core';

const Loader = () => {
  return (
    <Container fixed>
      <Grid container direction='row' justify='center' alignItems='center'>
        <CircularProgress />
      </Grid>
    </Container>
  );
};

export default Loader;
