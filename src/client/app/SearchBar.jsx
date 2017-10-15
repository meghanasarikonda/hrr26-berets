import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'query': ''
    };
    this.onSearch = this.onSearch.bind(this);
    this.beginSearch = this.beginSearch.bind(this);
  }

  onSearch(e) {
    this.setState({
      'query': e.target.value
    });
  }

  beginSearch(e) {
    var query = this.state.query;
    e.preventDefault();
    this.props.searchProducts(e, query);
  }

  render() {
    return (
      <form onSubmit={this.beginSearch} className="search">
        <div className="input-group">
          <input id={this.state.query} className="form-control mr-sm-2" onChange={this.onSearch} type="text" placeholder="Search" aria-label="Search"/>
          <button type="submit" id={this.state.query} onClick={this.beginSearch} className="btn btn-outline-primary my-2 my-sm-0">
              Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
