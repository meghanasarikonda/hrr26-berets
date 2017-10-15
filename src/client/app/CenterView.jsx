import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import PopularItems from './PopularItems.jsx';
import SearchResults from './SearchResults.jsx';
import LoadingCircle from './LoadingCircle.jsx';

export default class CenterView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="center-view col-md-6" id="whitebox-popular">
          <LoadingCircle />
        </div>
      );
    } else {
      if (this.props.searchResults.length) {
        return (
          <div className="center-view col-md-6" id="whitebox-popular">
            <h3>Search Results</h3>
            <SearchResults
              results={this.props.searchResults}
              addToList={this.props.addToList}
              removeItem={this.props.removeItem}
              currentList={this.props.currentList}/>
          </div>
        );
      } else {
        return (
          <div className="center-view col-md-6" id="whitebox-popular">
            <h3>Trending Items</h3>
            <SearchResults
              results={this.props.products}
              addToList={this.props.addToList}
              removeItem={this.props.removeItem}
              currentList={this.props.currentList}/>
          </div>
        );
      }
    }
  }
}