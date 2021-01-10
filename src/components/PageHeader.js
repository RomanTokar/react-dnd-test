import React from 'react';
import {Button, Chip, Container, Grid, Icon, Link, Paper} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import FlagIcon from '@material-ui/icons/Flag';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const PageHeader = () => {
  const chipDara = [
    {
      label: 'Layering',
      disabled: false,
      icon: (
        <Icon>
          <DoneIcon fontSize={'small'} color={'primary'}/>
        </Icon>
      )
    },
    {
      label: 'Campaign',
      disabled: false,
      icon: (
        <Icon>
          <DoneIcon fontSize={'small'} color={'primary'}/>
        </Icon>
      )
    },
    {
      label: 'Adsets',
      disabled: false,
      icon: (
        <FlagIcon fontSize={'small'} color={'primary'}/>
      )
    },
    {
      label: 'Preferences',
      disabled: true,
      icon: (
        <FiberManualRecordIcon fontSize={'small'} color={'primary'}/>
      )
    },
    {
      label: 'Ads',
      disabled: true,
      icon: (
        <FiberManualRecordIcon fontSize={'small'} color={'primary'}/>
      )
    },
    {
      label: 'Summary',
      disabled: true,
      icon: (
        <FiberManualRecordIcon fontSize={'small'} color={'primary'}/>
      )
    }
  ];

  return (
    <Container>
      <Grid container justify={'center'} alignItems={'center'} spacing={2}>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <Button
            size={'small'}
            style={{color: '#7986cc', background: '#f1f4fb', padding: '5px 10px'}}
            variant={'contained'} startIcon={<KeyboardBackspaceIcon/>}
          >
            Back to connectio
          </Button>
        </Grid>
        <Grid item lg={7} md={7} sm={12} xs={12}>
          {chipDara.map(item => (
            <Chip
              key={item.label}
              label={item.label} disabled={item.disabled}
              icon={item.icon} component={Paper}
              style={{margin: 5, background: 'white', color: '#7986cc'}}/>
          ))}
        </Grid>
        <Grid item lg={2} md={2} sm={12} xs={12}>
          <Link size={'small'} href={'#'} style={{color: '#7986cc'}}>Test audiences</Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageHeader;