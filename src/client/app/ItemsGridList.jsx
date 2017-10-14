import React from 'react';
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

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const ItemsGridList = ({products, addToList, removeItem, currentList}) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {products.map((item) => {
        return (
          <GridTile
            key={item.image}
            title={item.name}
            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <img src={item.image} />
          </GridTile>
        );
      })
      }
    </GridList>
  </div>
);

export default ItemsGridList;