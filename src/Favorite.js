import React from 'react'
import CharacterCard from './CharacterCard'

export default function Favorite({ favorites, removeFavorite }) {
  const favoriteCards = favorites.map(character => {
    return <CharacterCard character={character} cardClicked={removeFavorite} />
  })

  return (
    <>
      {favorites.length > 0 ?
        <div className='favorite'>
          <h2>Favorites</h2>
          {favoriteCards}
        </div>
        : null}
    </>
  )
}