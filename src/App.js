import React, { Component } from 'react';
// import { SearchBox }from './components/search-box/search-box.component'
import { CardList } from './components/card-list/card-list.component'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))


  }

  render() {
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <CardList monsters={this.state.monsters}>
          {
            this.state.monsters.map(monster => (
              <h1 key={monster.id}> {monster.name}</h1>))
          }
        </CardList>

      </div>
    );
  }
}

export default App;
