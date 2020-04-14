import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestMechs } from '../actions.js';

const mapStateToProps = state => {
  return {
    searchField: state.searchMechs.searchField,
    mechs: state.requestMechs.mechs,
    isPending: state.requestMechs.isPending,
    error: state.requestMechs.error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMechs: () => dispatch(requestMechs())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestMechs();
  }

  render() {
    const { searchField, onSearchChange, mechs, isPending } = this.props;
    const filteredMechs = mechs.filter(bot => {
      return bot.username.toLowerCase().includes(searchField.toLowerCase())
    });
    if (isPending)
      return <h1>Loading...</h1>
    else {
      console.log("IM HERE", mechs)
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