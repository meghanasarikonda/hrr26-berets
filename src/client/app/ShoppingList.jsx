import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import ShoppingListEntry from './ShoppingListEntry.jsx';
export default class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listName: '',
      currentList: this.props.list,
      renaming: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleName = this.handleName.bind(this);
    this.setName = this.setName.bind(this);
    this.changeName = this.changeName.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.cancelRename = this.cancelRename.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
    this.moveCursorToEnd = this.moveCursorToEnd.bind(this);
  }


  handleChange(listName) {
    this.state.listName = listName;
    if (this.props.shoppingList[listName]) {
      this.state.currentList = this.props.shoppingList[listName];
    } else {
      this.state.currentList = [];
    }
    this.setState({ renaming: false });
  }

  handleName(name) {
    this.setState({ listName: name });
  }

  handleRename() {
    this.setState({ renaming: true });
  }

  cancelRename() {
    this.setState({ renaming: false });
  }

  setName() {
    var name = this.state.listName;
    this.props.handleNameChange(name);
    if (this.props.shoppingList[name]) {
      this.props.handleListChange(this.props.shoppingList[name]);
    } else {
      this.props.handleListChange([]);
    }
    this.setState({ renaming: false });
  }

  changeName() {
    var name = this.state.listName;
    this.props.handleRenameList(name);
    this.setState({ renaming: false });
  }

  handleEnterKeyPress(e) {
    if (e.key === 'Enter') {
      this.changeName();
    }
  }

  moveCursorToEnd(e) {
    var temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
  }

  render() {
    const { list } = this.props;
    if (this.props.myList || this.props.list) {
      return (
        <div>
          <div className="list-tools">
            {
              (this.state.renaming)
                ?
                <h3>
                  <input autoFocus onFocus={this.moveCursorToEnd} onBlur={this.cancelRename} className="wish-list-edit" onChange={(e) => this.handleName(e.target.value)} type="text" value={this.props.currentListName} onKeyPress={this.handleEnterKeyPress} />
                </h3>
                :
                <h3>
                  <span className="wish-list-name" onClick={this.handleRename}>{this.props.currentListName}</span>
                </h3>
            }
            <ShoppingListEntry
              myList={this.props.myList}
              shoppingList={this.props.list}
              removeItem={this.props.removeItem}
              handleChange={this.handleChange}
              setName={this.setName}
              currentListName={this.props.currentListName}
              newList={this.props.newList}
              saveList={this.props.saveList}
              removeList={this.props.removeList}
              sendList={this.props.sendList}
            />
          </div>
        </div>
      );
    }
    return (
      <div>There's nothing in your list yet!</div>
    );
  }
}
