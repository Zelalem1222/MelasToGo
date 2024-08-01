import React from 'react'
import { mocks  } from '../../../functions/places/mock'
import camelize from 'camelize'


export const restaurantsRequest = (location) => {
    console.log("location -" , `${location}`)
    console.log('mocks -' , mocks[`${location}`])
    return new Promise((resolve, reject) => {
        const mock = mocks[`${location}`]
        if(!mock){
            reject("Not found")
        }
        resolve(mock)
    })
}

export const restaurantTransfromed = ({ results = [] }) => {
    

   const mappedResults = results.map((restaurant) => {
    return {
        ...restaurant,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "OPERATIONAL",
        address: restaurant.vicinity
    }
   })

    return camelize(mappedResults)
}

