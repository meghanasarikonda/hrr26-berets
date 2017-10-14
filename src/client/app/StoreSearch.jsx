import React from 'react';
import axios from 'axios';
import FlatButton from 'material-ui/FlatButton';


class StoreSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      stores: [],
    };
    this.onSearch = this.onSearch.bind(this);
    this.searchStores = this.searchStores.bind(this);
  }

  onSearch(e) {
    this.setState({
      query: e.target.value
    });
  }

  searchStores(e) {
    var handleStoreSearch = this.props.handleStoreSearch;
    var query = this.state.query;
    axios.get('/zipcodes', {
      params: {
        query: query
      }
    })
      .then((res) => {
        handleStoreSearch(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <input
          className="searchBar"
          id={this.state.query}
          placeholder="Enter a Zipcode for Nearest Walmart"
          type="text"
          onChange={this.onSearch}
        />
        <FlatButton
          label="Go"
          primary={true}
          className="searchBtn"
          value="Search Store"
          id={this.state.query}
          onClick={this.searchStores}
        />
      </div>
    );
  }
}

export default StoreSearch;
