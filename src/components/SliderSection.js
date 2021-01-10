import React from 'react';
import {Box, Button, Container, Grid, Paper, Slider, Typography} from '@material-ui/core';
import {useCardsContext} from '../contexts/CardsContextProvider';

const SliderSection = () => {
  const {cardsCount, setCardsCount} = useCardsContext();
  const marks = new Array(6).fill(0).map((el, i) => {
    return {
      value: i + 1,
      label: i + 1
    };
  });

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Paper style={{height: '100%'}}>
            <Box p={2}>
              <Typography>$15 000 campaign budget</Typography>
              <Typography>22 interests</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{height: '100%'}}>
            <Box p={2}>
              <Slider
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={marks}
                min={1}
                max={6}
                value={cardsCount}
                onChange={(event, newValue) => setCardsCount(newValue)}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{height: '100%'}}>
            <Box p={2} display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <Button disabled color={'primary'} variant={'contained'}>Create Adsets</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SliderSection;