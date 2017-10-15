import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import AlertToRemoveList from './AlertToRemoveList.jsx';
import NewListModal from './NewListModal.jsx';
import WishListIconScrollMenu from './WishListIconScrollMenu.jsx';

/**
 * Simple Icon Menus demonstrating some of the layouts possible using the `anchorOrigin` and
 * `targetOrigin` properties.
 */
const WishListIconMenu = (props) => (
  <div className="clear-icon">
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <WishListIconScrollMenu myList={props.myList} handleChange={props.handleChange} setName={props.setName}/>
      <Divider />
      <AlertToRemoveList removeList={props.removeList}/>
    </IconMenu>
  </div>
);

export default WishListIconMenu;