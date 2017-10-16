import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 448,
    overflowY: 'auto',
  },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const WishListItemScroll = (props) => (
  <div style={styles.root}>
    <GridList
      className="grid-list"
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {props.shoppingList.map((item) => (
        <GridTile
          key={item.url}
          title={<a className="item-title" href={item.url} target="_blank">{item.name}</a>}
          subtitle={<span></span>}
          actionIcon={<IconButton onClick={() => { props.removeItem(item.itemId); }}>
            <i className="input-delete-icon material-icons">delete</i>
          </IconButton>}
        >
          <img src={item.largeImage} onClick={() => { console.log(item); }}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default WishListItemScroll;