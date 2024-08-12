module.exports.payRequest = (request , response , stripe) => {
    console.log(JSON.parse(request.body))
   response.send("Sucess")
}