import React from 'react'

export default function CharacterCard({ character, cardClicked }) {
  const handleClick = () => {
    cardClicked(character)
  }

  return (
    <div className="character-card" onClick={handleClick}>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Species - {character.species}</p>
      <p>Status - {character.status}</p>
    </div>
  )
} 