import React, {useState} from 'react';
import {
  AppBar,
  Container,
  Grid,
  Hidden,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar
} from '@material-ui/core';
import Logo from './Logo';
import ExpandMoreListItem from './ExpandMoreListItem';
import GraduateIcon from '../assets/icons/graduation-cap-solid.svg';
import ShareIcon from '../assets/icons/share-solid.svg';
import MenuIcon from '@material-ui/icons/Menu';
import MenuDialog from './MenuDialog';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  console.log('render');

  return (
    <AppBar style={{background: '#293347', padding: 0}} position={'static'}>
      <Toolbar disableGutters>
        <Container style={{display: 'flex', alignItems: 'center'}}>
          <Grid container alignItems={'center'}>
            <Grid item lg={2} md={2} sm={3} xs={3}>
              <Logo/>
            </Grid>
            <Hidden smDown>
              <Grid item lg={4} md={4}>
                <List style={{display: 'flex'}} disablePadding>
                  <ExpandMoreListItem>Lists</ExpandMoreListItem>
                  <ExpandMoreListItem selected>Audiences</ExpandMoreListItem>
                  <ExpandMoreListItem>Automate</ExpandMoreListItem>
                </List>
              </Grid>
            </Hidden>
            <Hidden>
              <Grid item lg={2} md={2} sm={2} xs={1}/>
            </Hidden>
            <Hidden>
              <Grid item lg={4} md={4} sm={5} xs={6}>
                <List style={{display: 'flex'}} disablePadding>
                  <ListItem disableGutters>
                    <Link href={'#'}>
                      <img src={GraduateIcon} alt="graduate-icon" style={{width: 20}}/>
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link href={'#'}>
                      <img src={ShareIcon} alt="graduate-icon" style={{width: 20}}/>
                    </Link>
                  </ListItem>
                  <ListItem disableGutters>
                    <Link
                      href={'#'} underline={'none'}
                      style={{
                        borderRadius: '50%',
                        background: '#be545e',
                        width: 20,
                        height: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: 13,
                        alignItems: 'center',
                        color: '#c4c4c4'
                      }}
                    >
                      6
                    </Link>
                  </ListItem>
                  <ExpandMoreListItem>
                    {'Hello Michael'}
                  </ExpandMoreListItem>
                </List>
              </Grid>
            </Hidden>
            <Hidden mdUp>
              <Grid item sm={1} xs={1}/>
            </Hidden>
            <Hidden mdUp>
              <Grid item sm={1} xs={1}>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon
                    style={{color: 'white'}}/>
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
          <MenuDialog open={open} setOpen={setOpen}/>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;