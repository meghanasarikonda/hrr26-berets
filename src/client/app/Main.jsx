import React, { Component } from 'react';
import axios from 'axios';
import PopularItems from './PopularItems.jsx';
import SearchBar from './SearchBar.jsx';
import FeaturedLists from './FeaturedLists.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import SearchResults from './SearchResults.jsx';
import ShoppingList from './ShoppingList.jsx';
import { Route, Link, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom';
import request from 'superagent';
import Header from './Header.jsx';
import StoreSearch from './StoreSearch.jsx';
import StoreResults from './StoreResults.jsx';
import CenterView from './CenterView.jsx';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: [],
      searchResults: [],
      currentList: [],
      currentListName: '',
      catalog: {},
      myList: [],
      shoppingList: {},
      storeResults: [],
      loading: false
    };

    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleRemoveFromList = this.handleRemoveFromList.bind(this);
    this.createList = this.createList.bind(this);
    this.saveList = this.saveList.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStoreSearch = this.handleStoreSearch.bind(this);
    this.getmyList = this.getmyList.bind(this);
    this.getFeaturedList = this.getFeaturedList.bind(this);
    this.getCatalog = this.getCatalog.bind(this);
    this.removeList = this.removeList.bind(this);
    this.handleRenameList = this.handleRenameList.bind(this);
    this.renameList = this.renameList.bind(this);
    this.sendList = this.sendList.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
  }

  componentWillMount() {
    this.getTrendingItems();
    if (this.props.loggedIn) {
      this.getmyList();
    }
    this.getCatalog();
  }

  sendList() {
    console.log('clicked');
    var url = '/sendlist';
    var list = this.state.currentList;

    var arr = [];
    for (var i = 0; i < list.length; i++) {
      var item = [ ];
      item[0] = list[i].name;
      //item[1] = list[i].url;
      arr.push('<br />' + item);
    }
    request
      .post(url)
      .send({
        list: arr,
      })
      .end((err, res) => {
        if (err) {
          console.log('error sending email', err);
        } else {
          console.log(res);
        }
      });
  }

  getCatalog() {
    var arr = [1085666, 5438, 3944, 976760];
    // var arr = [3944];
    arr.forEach(item => this.getFeaturedList(item));
  }

  getTrendingItems() {
    this.setState({
      loading: true
    });
    axios.get('/trending')
      .then((res) => {
        this.setState({
          popular: res.data,
          loading: false
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getmyList() {
    axios.get('/myLists')
      .then((res) => {
        if (res.data) {
          let arr = Object.keys(res.data);
          let collection = res.data;
          this.setState({
            myList: arr,
            currentListName: arr[0],
            shoppingList: collection,
            currentList: collection[arr[0]],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSearch(products) {
    this.setState({ searchResults: products });
  }

  searchProducts(e, query) {
    this.setState({
      loading: true
    });
    axios.get('/search', {
      params: {
        query: query
      }
    })
      .then((res) => {
        this.setState({
          searchResults: res.data,
          loading: false
        });
        console.log('my res.data', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    e.preventDefault();
  }

  handleStoreSearch(stores) {
    this.setState({ storeResults: stores });
  }

  handleAddToList(item) {
    if (!this.props.loggedIn) {
      return alert('Please Log In to Continue');
    }
    console.log(this.state.currentList);
    let list = this.state.currentList.slice();
    list.unshift(item);
    this.setState({
      currentList: list
    }, this.saveList);
  }

  handleRemoveFromList(id) {
    let list = this.state.currentList.slice();
    let filtered = list.filter(product => product.itemId !== id);
    this.setState({ currentList: filtered }, this.saveList);
  }

  handleNameChange(name) {
    if (this.state.myList[0] === 'Untitled' && this.state.myList.indexOf(name) === -1) {
      let listNames = this.state.myList.slice();
      listNames[0] = name;
      this.setState({myList: listNames});
    }
    let oldName = this.state.currentListName;
    let oldList = this.state.shoppingList[oldName];
    this.setState({ currentListName: name });
  }

  handleListChange(list) {
    this.setState( { currentList: list });
  }

  getFeaturedList(id) {
    axios.get('/feature', {
      params: {
        query: id
      }
    })
      .then((res) => {
        let catalog = Object.assign({}, this.state.catalog);
        catalog[id] = res.data;
        this.setState({ catalog });
        // console.log('Catalog --> ',this.state.catalog);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveList() {
    let saved = {};
    saved[this.state.currentListName] = this.state.currentList;
    let url = (this.state.shoppingList[this.state.currentListName] !== undefined) ? '/save-existing' : '/save';
    console.log(saved);
    axios.post(url, saved)
      .then((res) => {
        let updatedList = res.data.shoppingList;
        this.setState({
          shoppingList: updatedList,
          currentList: (updatedList[this.state.currentListName]) ? updatedList[this.state.currentListName] : [],
          currentListName: (this.state.currentListName) ? this.state.currentListName : 'Untitled',
          myList: Object.keys(updatedList)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createList(newListName) {
    axios.post('/create-list', {newListName: newListName})
      .then((res) => {
        return res.data.shoppingList;
      })
      .then((updatedList) => {
        const oldListNames = this.state.myList;
        const newListNames = Object.keys(updatedList);
        newListNames.forEach((name) => {
          if (!(oldListNames.includes(name))) {
            this.setState({
              shoppingList: updatedList,
              currentList: updatedList[name],
              currentListName: name,
              myList: Object.keys(updatedList)
            });
            return;
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removeList() {
    let currentListName = this.state.currentListName;
    axios.put('/remove-list', currentListName)
      .then((res) => {
        this.getmyList();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleRenameList(newName) {
    let oldName = this.state.currentListName;
    if (oldName !== newName) {
      this.renameList(oldName, newName);
    }
  }

  renameList(oldName, newName) {
    let names = [oldName, newName];
    axios.put('/rename-list', names)
      .then((res) => {
        return res.data.shoppingList;
      })
      .then((updatedList) => {
        const oldListNames = this.state.myList;
        const newListNames = Object.keys(updatedList);

        if (!oldListNames.includes(newName)) {
          this.setState({
            shoppingList: updatedList,
            currentList: updatedList[newName],
            currentListName: newName,
            myList: Object.keys(updatedList)
          });
        } else {
          newListNames.forEach((name) => {
            if (!(oldListNames.includes(name))) {
              this.setState({
                shoppingList: updatedList,
                currentList: updatedList[name],
                currentListName: name,
                myList: Object.keys(updatedList)
              });
              return;
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let SearchResultsContainer = null;
    if (this.state.searchResults.length) {
      SearchResultsContainer = (
        <div className="col-xs-12">
          <SearchResults
            results={this.state.searchResults}
            addToList={this.handleAddToList}
            removeItem={this.handleRemoveFromList}
            currentList={this.state.currentList}/>
        </div>
      );
    }

    let StoreResultsContainer = null;
    if (this.state.storeResults.length) {
      StoreResultsContainer = (
        <div className="col-xs-12">
          <StoreResults
            results={this.state.storeResults}/>
          <br />
          <br />
        </div>
      );
    }

    let ShoppingContainer = <Link to="/loginUser" className="login-user" href="#"><h3>Log in to see your wish list!</h3></Link>;
    if (this.props.loggedIn) {
      ShoppingContainer = (
        <div>
          <ShoppingList
            currentListName={this.state.currentListName}
            list={this.state.currentList}
            removeItem={this.handleRemoveFromList}
            removeList={this.removeList}
            newList={this.createList}
            saveList={this.saveList}
            handleNameChange={this.handleNameChange}
            handleListChange={this.handleListChange}
            handleRenameList={this.handleRenameList}
            myList={this.state.myList}
            shoppingList={this.state.shoppingList}
            currentList={this.state.currentList}
            sendList={this.sendList}
          />
        </div>
      );
    }

    let FeaturedListContainer = <div></div>;
    if (Object.keys(this.state.catalog).length === 4) {
      FeaturedListContainer = (
        <div className="row">
          <FeaturedLists
            list={this.state.catalog}
            addToList={this.handleAddToList}
            removeItem={this.handleRemoveFromList}
            currentList={this.state.currentList}/>
        </div>
      );
    }

    return (
      <div>
        <Header loggedIn={this.props.loggedIn} handleSearch={this.handleSearch} handleLogout={this.props.handleLogOut} searchProducts={this.searchProducts}/>
        <div className="container-fluid">
          <br />
          {/* Popular items retrieved from Walmart's 'Trending' api */}
          <div className="row">
            <div className="col-md-3">
              <h3>Locate Walmart: </h3>
              <StoreSearch handleStoreSearch={this.handleStoreSearch}/>
              {StoreResultsContainer}
            </div>
            <CenterView products={this.state.popular}
              addToList={this.handleAddToList}
              removeItem={this.handleRemoveFromList}
              currentList={this.state.currentList}
              searchResults={this.state.searchResults}
              results={this.state.searchResults}
              loading={this.state.loading}
            />
            <div className="col-md-3">
              {/* User's current shopping list */}
              {ShoppingContainer}
            </div>

          </div><br />
          {/* Featured wishlists based on best-selling items in the Walmart catalog */}
          <br />
          <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-8 featured-items">
              <h3 className="featured">Featured Items</h3>
              {FeaturedListContainer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
