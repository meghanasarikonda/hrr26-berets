import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class StoreResultsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.name}
          subtitle={
            this.props.address + ', ' + this.props.city + ', ' + this.props.state + ', ' + this.props.zipcode
          }
        />
        <CardText>
          {this.props.phone}
        </CardText>
      </Card>
    );
  }
}


export default StoreResultsItem;
