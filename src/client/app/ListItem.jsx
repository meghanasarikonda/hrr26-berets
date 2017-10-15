import React, { Component } from 'react';
import { Modal, ModalBody } from 'react-modal-bootstrap';
import ProductDetails from './ProductDetails.jsx';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleRemove() {
    let itemId = this.props.item.itemId;
    this.props.removeItem(itemId);
  }

  handleItemClick() {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  handleAdd() {
    this.props.addToList(this.props.item);
  }

  render() {
    return (
      <div className='row'>
        <Modal
          isOpen={this.state.showDetails}
          onRequestHide={this.handleItemClick}
        >
          <ModalBody>
            <ProductDetails itemId={this.props.item.itemId} itemUrl={this.props.item.url} addToList={this.props.addToList} removeItem={this.props.removeItem} isInList={this.props.isInList} />
          </ModalBody>
        </Modal>
        <div className='col-sm-3'>
          <a className="text-link" onClick={this.handleItemClick}><strong>{this.props.item.name.substring(0, 30)}</strong></a>
        </div><br />
        <div className='col-sm-3'>
          <img src={this.props.item.image} alt=""/>
        </div>
        <div className='col-sm-2'>
          <b> ${this.props.item.price} </b>
          <div>
            <img src={this.props.item.rating} alt=""/>
          </div>
        </div><br />
        <div className='col-sm-2'>
          {
            (this.props.isInList)
              ? <a className="btn btn-default btn-block" onClick={this.handleRemove}>Remove From List</a>
              : <a className="btn btn-default btn-block" onClick={this.handleAdd}>Add to List</a>
          }
        </div>
        <div className='col-sm-2'>
          <a href={this.props.item.url} target="_blank" className="btn btn-primary">Buy it Now!</a><br /><br /><p/>
        </div>
      </div>
    );


  }
}

export default ListItem;
