// const { mocks , addMockImage } = require("../../src/services/restaurants/mock")
// const url = require("url")

// module.exports.placesRequest = (request , response ) => {
//     const { location } = url.parse(request.url , true).query
//     const data = mocks[location]
//     if(data){
//         data.results = data.results.map(addMockImage)
//     }
//     response.json(data)
// }