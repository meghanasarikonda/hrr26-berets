import React from 'react';
import Item from './Item.jsx';

const PopularItems = (props) => {
  if (props.products) {
    return (
      <div className="popular-items">
        {props.products.map(item =>
          <Item addToList={props.addToList} currentList={props.currentList} item={item} removeItem={props.removeItem} key={item.itemId}/>
        )}
      </div>);
  }
  return (
    <div className="popular-items">
        No products here!
    </div>
  );
};


//render one box for each item
//we want three now but could handle more or less
//onClick passed from parent component allows user to follow url link to walmart product page
//When styling make sure products are arranged horizontally.


export default PopularItems;
