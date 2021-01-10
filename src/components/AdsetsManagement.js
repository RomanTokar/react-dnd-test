import React from 'react';
import {Button, Container, Grid, Paper, Typography} from '@material-ui/core';
import TodoImage from '../assets/icons/todoImage.png';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import UndoIcon from '@material-ui/icons/Undo';
import {useCardsContext} from '../contexts/CardsContextProvider';

const AdsetsManagement = () => {
  const {setCardsCount} = useCardsContext();

  return (
    <Container>
      <Grid container>
        <Grid item lg={6} md={10} sm={12} xs={12} container spacing={2} alignItems={'center'}>
          <Grid item container lg={6} md={6} sm={12} xs={12} spacing={2} alignItems={'center'}>
            <Grid item xs={3}>
              <img src={TodoImage} alt="todoImage"/>
            </Grid>
            <Grid item xs={5}>
              <Typography>How many adsets to create?</Typography>
            </Grid>
          </Grid>
          <Grid item container lg={6} md={6} sm={12} xs={12} spacing={2} alignItems={'center'}>
            <Grid item lg={9} md={6} sm={4} xs={8}>
              <Button
                size={'small'} component={Paper}
                style={{color: '#7986cc', padding: '5px 10px'}}
                startIcon={<ShuffleIcon/>}
              >
                Shuffle Audiences
              </Button>
            </Grid>
            <Grid item lg={3} md={3} sm={2} xs={2}>
              <Button
                startIcon={<UndoIcon/>} component={Paper} size={'small'}
                style={{color: '#7986cc', padding: '5px 10px'}}
                onClick={() => setCardsCount(6)}
              >
                Undo
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} md={2} sm={2} xs={false}/>
      </Grid>
    </Container>
  );
};

export default AdsetsManagement;