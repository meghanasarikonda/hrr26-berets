import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'query': ''
    };
    this.onSearch = this.onSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  onSearch(e) {
    this.setState({
      'query': e.target.value
    });
  }

  searchProducts(e) {
    var handleSearch = this.props.handleSearch;
    var query = this.state.query;

    axios.get('/search', {
      params: {
        query: query
      }
    })
      .then((res) => {
        handleSearch(res.data);
        console.log('my res.data', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.searchProducts} className="search">
        <div className="input-group">
          <input id={this.state.query} className="form-control mr-sm-2" onChange={this.onSearch} type="text" placeholder="Search" aria-label="Search"/>
          <button type="submit" id={this.state.query} onClick={this.searchProducts} className="btn btn-outline-primary my-2 my-sm-0">
              Search
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
