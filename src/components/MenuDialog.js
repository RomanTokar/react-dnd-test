import React from 'react';
import {
  Accordion, AccordionDetails,
  AccordionSummary,
  AppBar, Box, Container,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PopoverContent from './PopoverContent';

const MenuDialog = ({open, setOpen}) => {
  const menuItems = ['Lists', 'Audiences', 'Automate'];

  return (
    <Dialog fullScreen open={open}>
      <AppBar style={{background: 'rgb(41, 51, 71)'}} position={'static'}>
        <Toolbar>
          <Grid container justify={'space-between'} alignItems={'center'}>
            <Grid item>
              <Typography variant="h6">
                Menu
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                edge="start" color="inherit" onClick={() => setOpen(false)}
                aria-label="close">
                <CloseIcon/>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box my={5}>
        <Grid container justify={'center'}>
          <Grid item xs={6}>
            {menuItems.map(item => (
              <Accordion key={item}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon/>}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <PopoverContent/>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default MenuDialog;