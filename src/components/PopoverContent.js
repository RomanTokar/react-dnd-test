import React from 'react';
import {Divider, List, ListItem} from '@material-ui/core';

const PopoverContent = () => {
  return (
    <List>
      <ListItem style={{width: 200}}>Action</ListItem>
      <ListItem>Another action</ListItem>
      <ListItem>Something</ListItem>
      <Divider/>
      <ListItem>Separated Link</ListItem>
    </List>
  );
};

export default PopoverContent;