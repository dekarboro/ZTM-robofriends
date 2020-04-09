import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mechs: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then( resp => resp.json())
      .then(users => this.setState({ mechs: users}));    
  }

  onSearchChange = (e) => {
    this.setState( { searchField: e.target.value });
  }

  render() {
    const { mechs, searchField } = this.state; 
    const filteredMechs = mechs.filter(bot => {
      return bot.username.toLowerCase().includes(searchField.toLowerCase())
    });
    if (! mechs.length)
      return <h1>Loading...</h1>
    else {
      return (
        <div className="tc">
          <h1 className="f1">MechaWorld</h1>
          <SearchBox searchChange={this.onSearchChange}/>
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

export default App;