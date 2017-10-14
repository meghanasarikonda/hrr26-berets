import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';

/**
 * The `maxHeight` property limits the height of the menu, above which it will be scrollable.
 */
const IconMenuExampleScrollable = () => (
  <IconMenu
    iconButtonElement={<IconButton><MapsPlace /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    maxHeight={272}
  >
    <MenuItem value="AL" primaryText="Alabama" />
    <MenuItem value="AK" primaryText="Alaska" />
    <MenuItem value="AZ" primaryText="Arizona" />

  </IconMenu>
);

export default IconMenuExampleScrollable;