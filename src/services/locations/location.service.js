import { Linking } from "react-native";
import camelize from "camelize";
import { locations } from "../../../functions/geocode/geocode.mock";


export const locationRequest = (searchTerm ) => {
    return  new Promise((resolve , reject) => {
        const locationMock = locations[searchTerm]
        if(!locationMock){
            reject("not found")
        }
        resolve(locationMock)
    })
}

export const locationTransform = (result) => {
    console.log(result)
    const formattedResponse = camelize(result)
    const { geometry = {} } = formattedResponse.results[0]
    const { lng , lat ,  } = geometry.location

    return { lng , lat , viewport: geometry.viewport}

}