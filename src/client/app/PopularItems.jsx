import React from 'react';
import ListItem from './ListItem.jsx';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const PopularItems = (props) => {
  if (props.products) {
    return (
      <div className="popular-items row">
        {props.products.map(item => {
          let isInList = !!props.currentList.find(itm => itm.itemId === item.itemId);
          return (
            <ListItem
              isInList={isInList}
              vertical
              addToList={props.addToList}
              item={item}
              removeItem={props.removeItem}
              key={item.itemId}/>
          );
        }
        )}
      </div>);
  }
};

export default PopularItems;
