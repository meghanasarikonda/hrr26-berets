import React from 'react';
import Item from './Item.jsx';
import ListItem from './ListItem.jsx';

const PopularItems = (props) => {
  if (props.products) {
    return (
      <div className="popular-items">
        {props.products.map(item => {
          let isInList = !!props.currentList.find(itm => itm.itemId === result.itemId);
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
  return (
    <div className="popular-items">
        No products here!
    </div>
  );
};

export default PopularItems;
