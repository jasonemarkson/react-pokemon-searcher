// import React from 'react' -- changed from a functional to Class component
import React, { Component } from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

class App extends Component {

  pokemonArr = []

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon', {
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(pokemon => 
      this.pokemonArr.push(pokemon)  
    )
  }

  render() {
    return(
      <div className="App">
        <PokemonPage pokemon={this.pokemonArr} />
      </div>
    )
  }

}


export default App
