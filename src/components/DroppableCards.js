import React, {useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader, Container,
  Grid,
  IconButton,
  List,
  ListItem, ListItemIcon, ListItemText, Paper
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {useCardsContext} from '../contexts/CardsContextProvider';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const DroppableCards = () => {
  const {cards, setCards} = useCardsContext();
  const [startDroppableId, setStartDroppableId] = useState(null);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);

    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragStart = ({source}) => {
    setStartDroppableId(source.droppableId);
  };

  const onDragEnd = ({source, destination}) => {
    setStartDroppableId(null);

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        cards[source.droppableId].dragList,
        source.index,
        destination.index
      );

      setCards(prevCards => (
        prevCards.map((card, i) => (
          i == source.droppableId ? {...card, dragList: items} : card
        ))
      ));
    } else {
      const result = move(
        cards[source.droppableId].dragList,
        cards[destination.droppableId].dragList,
        source,
        destination
      );

      setCards(prevCards => (
        prevCards.map((card, i) => {
          if (i == source.droppableId) {
            return {...card, dragList: result[source.droppableId]};
          }

          if (i == destination.droppableId) {
            return {...card, dragList: result[destination.droppableId]};
          }

          return card;
        })
      ));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Container>
        <Grid container spacing={4} justify={'center'}>
          {cards.map((card, i) => (
            <Grid key={`card-${i}`} item lg={3} md={4} sm={6} xs={8}>
              <Card style={{
                transition: 'border 0.5s',
                border: startDroppableId && i != startDroppableId
                  ? '2px solid purple'
                  : '2px solid transparent'
              }}>
                <CardHeader
                  subheader={card.label}
                  action={
                    <IconButton
                      style={{
                        background: '#84889d',
                        color: 'white',
                        borderRadius: 20,
                        padding: '4px 20px'
                      }}>
                      <MoreHorizIcon style={{width: 16, height: 16}}/>
                    </IconButton>}
                >
                </CardHeader>
                <CardContent>
                  <Droppable droppableId={`${i}`}>
                    {(provided, snapshot) => (
                      <List
                        ref={provided.innerRef}
                      >
                        {card.dragList.map((item, index) => (
                          <Draggable
                            key={item.name}
                            draggableId={item.name}
                            index={index}>
                            {(provided, snapshot) => (
                              <ListItem
                                disableGutters
                                component={Paper}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                  margin: '10px 0 0 0',
                                  background: snapshot.isDragging ? 'gray' : 'white',
                                  color: snapshot.isDragging ? 'white' : 'black',
                                  transition: '20s',
                                  ...provided.draggableProps.style
                                }}
                              >
                                <Grid container justify={'space-between'} alignItems={'center'}>
                                  <Grid container xs={5} item justify={'flex-start'}
                                        alignItems={'center'}>
                                    <Grid item lg={5}>
                                      <ListItemIcon>
                                        <MoreVertIcon/>
                                      </ListItemIcon>
                                    </Grid>
                                    <Grid item xs={5}>
                                      <ListItemText primary={item.name}/>
                                    </Grid>
                                  </Grid>
                                  <Grid container xs={5} item justify={'flex-end'}
                                        alignItems={'center'}>
                                    <Grid item xs={5}>
                                      <ListItemText primary={item.value}/>
                                    </Grid>
                                    <Grid item xs={5}>
                                      <ListItemIcon>
                                        <HighlightOffIcon fontSize={'small'}/>
                                      </ListItemIcon>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </ListItem>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </List>
                    )}
                  </Droppable>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </DragDropContext>
  );
};

export default DroppableCards;