import React , { createContext , useState } from 'react'
import { Children } from 'react/cjs/react.production.min';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {

  const [favourites , setFavourites] = useState([])

  const add = (restaurant) => {
    setFavourites([...favourites , restaurant])
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.fillter(
        (x) => x.placeId !== restaurant.placeId 
        )

        setFavourites(newFavourites)
  }

    return (
        <FavouriteContext.Provider
        value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove
        }}>
            {children}
        </FavouriteContext.Provider>
    )
}