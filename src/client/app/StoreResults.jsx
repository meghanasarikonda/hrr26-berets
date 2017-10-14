import React, { Component } from 'react';
import StoreResultsItem from './StoreResultsItem.jsx';

class StoreResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props results', this.props.results);
    return (
      <div>
        <h3>Store Results</h3>
        {this.props.results.map((result) => {
          return (
            <StoreResultsItem
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
    );
  }
}


export default StoreResults;
