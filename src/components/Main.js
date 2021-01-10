import React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import SliderSection from './SliderSection';
import DroppableCards from './DroppableCards';
import PageHeader from './PageHeader';
import Footer from './Footer';
import AdsetsManagement from './AdsetsManagement';

const Main = () => {
  return (
    <Box my={5}>
      <Grid container direction={'column'} spacing={3}>
        <Grid item xs>
          <PageHeader/>
        </Grid>
        <Grid item xs>
          <AdsetsManagement/>
        </Grid>
        <Grid item xs>
          <SliderSection/>
        </Grid>
        <Grid item xs>
          <DroppableCards/>
        </Grid>
        <Grid item xs>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;