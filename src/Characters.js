import React from 'react'
import CharacterCard from './CharacterCard'

export default function Characters({ characters, addFavorite }) {
  const displayCharacters = () => {
    return characters.map(character => {
      return <CharacterCard
        cardClicked={addFavorite}
        key={character.id}
        character={character} />
    })
  }

  return (
    <section className="characters">
      {displayCharacters()}
    </section>
  )
}