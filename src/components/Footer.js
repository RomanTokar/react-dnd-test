import React from 'react';
import {Box, Button, Container, Divider, Grid} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const Footer = () => {
  return (
    <footer>
      <Divider/>
      <Container>
        <Box p={2}>
          <Grid container justify={'space-between'}>
            <Grid item xs={1}>
              <Button startIcon={<KeyboardBackspaceIcon/>}
                      style={{color: '#7986cc', background: '#f1f4fb', padding: '5px 10px'}}
                      variant={'contained'}>Back</Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant={'contained'} style={{
                color: 'white',
                background: '#9176c8',
                padding: '5px 10px'
              }}>Continue</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;