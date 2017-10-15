import React, { Component } from 'react';
import StoreResultsItem from './StoreResultsItem.jsx';

class StoreResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Stores Near You: </h3>
        <div className="store">
          {this.props.results.map((result) => {
            return (
              <StoreResultsItem
                key={result.streetAddress}
                name={result.name}
                address={result.streetAddress}
                city={result.city}
                state={result.state}
                zipcode={result.zipcode}
                phone={result.phone}
              />
            );
          })}
        </div>
      </div>
    );
  }
}


export default StoreResults;
