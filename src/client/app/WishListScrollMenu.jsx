import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';

/**
 * The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 */
const WishListScrollMenu = (props) => (
  <IconMenu
    iconButtonElement={<MenuItem primaryText="Select Another List" />}
    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    maxHeight={168}
    onChange={(e, data) => { props.handleChange(data); props.setName(); }}
  >

    {props.myList.map((list, index) => {
      return (<MenuItem key={index} value={list} primaryText={list} />);
    })}

  </IconMenu>
);

export default WishListScrollMenu;