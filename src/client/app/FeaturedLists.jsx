import React from 'react';
import axios from 'axios';
import FeaturedItem from './FeaturedItem.jsx';

var FeaturedLists = (props) => {
  return (
    <div id="FL-Container">
      <div className="FL-col1">
        <div className="aligning"><b>ELECTRONICS</b></div><br/>
        {props.list[3944].map(item =><FeaturedItem item={item} addToList={props.addToList} key={item.itemId}/>) }
      </div>

      <div className="FL-col1">
        <div className="aligning"><b>BEAUTY</b></div><br/>
        {props.list[1085666].map(item =><FeaturedItem item={item} addToList={props.addToList} key={item.itemId}/>) }
      </div>

      <div className="FL-col1">
        <div className="aligning product-name"><b>CLOTHING</b></div><br/>
        {props.list[5438].map(item =><FeaturedItem item={item} addToList={props.addToList} key={item.itemId}/>) }
      </div>

      <div className ="FL-col1">
        <div className="aligning"><b>HEALTH</b></div><br/>
        {props.list[976760].map(item =><FeaturedItem item={item} addToList={props.addToList} key={item.itemId}/>) }
      </div>
    </div>
  );
};

export default FeaturedLists;
