import { Linking } from "react-native";
import camelize from "camelize";


export const locationRequest = (searchTerm ) => {
    return  fetch(`http://127.0.0.1:5001/mealstogo-92686/us-central1/geocode?city=${searchTerm}`).then((res) => {
        return res.json()
    }).catch((err) => {
        console.log(err)
    })
}

export const locationTransform = (result) => {
    console.log(result)
    const formattedResponse = camelize(result)
    const { geometry = {} } = formattedResponse.results[0]
    const { lng , lat ,  } = geometry.location

    return { lng , lat , viewport: geometry.viewport}

}