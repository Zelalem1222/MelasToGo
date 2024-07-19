import React , { createContext , useState , useEffect , useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../authentication/authentication.context';

export const FavouriteContext = createContext();

export const FavouriteContextProvider = ({ children }) => {
  const {user} = useContext(AuthenticationContext);
  const [favourites , setFavourites] = useState([])

  const saveFavourites = async (value, uid) => {
    console.log(uid)
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    
    try {
       const value = await AsyncStorage.getItem(`@favourites-${uid}`)
        if(value !== null) {
          setFavourites(JSON.parse(value))
        }
    } catch(e) {
      console.log('error loading', e)
    }
  }

  useEffect(() => {
    if(user && user.uid){
      loadFavourites(user.uid)
    }
  }, [user])

  useEffect(() => {
    if (user && user.uid && favourites.length) {
      console.log(user)
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

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