import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import PopularItems from './PopularItems.jsx';
import SearchResults from './SearchResults.jsx';

export default class CenterView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.searchResults);
    if (this.props.searchResults.length) {
      return (
        <div className="col-md-6" id="whitebox-popular">
          <SearchResults
            results={this.props.searchResults}
            addToList={this.props.addToList}
            removeItem={this.props.removeItem}
            currentList={this.props.currentList}/>
        </div>
      );
    } else {
      return (
        <div className="col-md-6" id="whitebox-popular">
          <h3>Popular Items</h3>
          <PopularItems
            products={this.props.products}
            addToList={this.props.addToList}
            removeItem={this.props.removeItem}
            currentList={this.props.currentList}/>
        </div>
      );
    }
  }
}