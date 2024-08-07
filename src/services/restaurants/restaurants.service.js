import React from 'react'
import { mocks , mockImages  } from './mock'
import camelize from 'camelize'


export const restaurantsRequest = (location) => {
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
    restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))]
    })
    return {
        ...restaurant,
        isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
        isClosedTemporarily: restaurant.business_status === "OPERATIONAL",
        address: restaurant.vicinity
    }
   })

    return camelize(mappedResults)
}

