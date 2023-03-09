import React , { createContext , useState , useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {

  const [favourites , setFavourites] = useState([])

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@favourites', jsonValue)
    } catch (e) {
      console.log('error saving', e)
    }
  }

  const loadFavourites = async () => {
    try {
       const value = await AsyncStorage.getItem('@favourites')
        if(value !== null) {
          setFavourites(JSON.parse(value))
        }
    } catch(e) {
      console.log('error loading', e)
    }
  }

  useEffect(() => {
    loadFavourites()
  }, [])

  useEffect(() => {
     saveFavourites(favourites)
  } , [favourites])

  const add = (restaurant) => {
    setFavourites([...favourites , restaurant])
  }

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
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