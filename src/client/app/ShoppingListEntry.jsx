import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import EmailSnackBar from './EmailSnackBar.jsx';

class ShoppingListEntry extends Component {

  constructor(props) {
    super(props);

    this.handleListChange = this.handleListChange.bind(this);
  }


  handleListChange(e) {
    let name = (e.target.value) ? e.target.value : 'Untitled';
    this.props.handleChange(name);
    this.props.setName();
  }

  render() {
    return (
      <div>
        <div>
          <EmailSnackBar sendList={this.props.sendList} />
        </div>
        <div>
          {this.props.shoppingList.map(product =>
            <ListItem
              isInList={true}
              item={product}
              key={product.itemId}
              removeItem={this.props.removeItem}/>
          )}
        </div>
      </div>
    );
  }
}


export default ShoppingListEntry;
