import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions.js';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      mechs: []
    }
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/http://jsonplaceholder.typicode.com/users')
      .then( resp => resp.json())
      .then(users => this.setState({ mechs: users}));    
  }

  render() {
    const { mechs } = this.state; 
    const { searchField, onSearchChange } = this.props;
    const filteredMechs = mechs.filter(bot => {
      return bot.username.toLowerCase().includes(searchField.toLowerCase())
    });
    if (! mechs.length)
      return <h1>Loading...</h1>
    else {
      return (
        <div className="tc">
          <h1 className="f1">MechaWorld</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Sticky>
            <ErrorBoundry>
              <CardList mechs={filteredMechs}/>
            </ErrorBoundry>
          </Sticky>
        </div>      
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);