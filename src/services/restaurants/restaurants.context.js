import React,{ useState , createContext , useEffect , useMemo, useContext } from "react";
import { LocationContext } from "../locations/location.context";


import { restaurantsRequest , restaurantTransfromed } from "./restaurants.service";

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({children}) => {
    const [restaurants , setRestaurants] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [error , setError] = useState(null)
    
    const { location } = useContext(LocationContext)

    const retriveRestaurants = (loc) => {
        setIsLoading(true)
        setRestaurants([])


         restaurantsRequest(loc)
         .then(restaurantTransfromed)
         .then((results) => {
            setRestaurants(results)
            setIsLoading(false)
         })
         .catch((err) => { 
            setError(err)
            setIsLoading(false)
        })

    }
    

   useEffect(() => {
    if(location){
        const locationString = `${location.lat},${location.lng}`
        console.log(locationString)
        retriveRestaurants(locationString)
    }
   } , [location])


    return (
        <RestaurantsContext.Provider value={{
            restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantsContext.Provider>
    )
}