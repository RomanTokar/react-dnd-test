import React from 'react';
import {ListItem, ListItemIcon, ListItemText, makeStyles, Popover} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PopoverContent from './PopoverContent';

const useStyles = makeStyles({
  root: {
    '&$selected': {
      backgroundColor: '#9176c8'
    },
  },
  selected: {}
});

const ExpandMoreListItem = ({children, selected}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ListItem classes={{root: classes.root, selected: classes.selected}}
                onClick={handleClick} selected={selected} style={{cursor: 'pointer'}}>
        <ListItemText>{children}</ListItemText>
        <ListItemIcon style={{minWidth: 0}}>
          <ExpandMoreIcon style={{color: 'white'}}/>
        </ListItemIcon>
      </ListItem>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <PopoverContent/>
      </Popover>
    </>
  );
};

export default ExpandMoreListItem;