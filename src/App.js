import React, { Component } from 'react';
import './App.css';
import Favorite from './Favorite'
import Characters from './Characters'

const rickMortyApi = "https://rickandmortyapi.com/api/character";

class App extends Component {
  state = {
    characters: [],
    favorites: []
  }

  componentDidMount() {
    fetch(rickMortyApi)
      .then(response => response.json())
      .then(({ results }) => this.setState({ characters: results }))
  }

  addFavorite = (character) => {
    if (!this.state.favorites.includes(character)) {
      this.setState(({ favorites: [...this.state.favorites, character] }))
    }
  }

  removeFavorite = character => {
    const newFavorites = this.state.favorites.filter(savedCharacter => {
      if (savedCharacter.id !== character.id) {
        return savedCharacter
      }
    })
    this.setState({ favorites: newFavorites })
  }

  render() {
    const { characters, favorites } = this.state
    return (
      <div className="App" >
        <h1>Rick and Morty</h1>
        <Favorite
          removeFavorite={this.removeFavorite}
          favorites={favorites} />
        <h2>Characters</h2>
        <Characters
          addFavorite={this.addFavorite}
          characters={characters} />
      </div>
    );
  }
}

export default App;
