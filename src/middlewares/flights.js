const request = require('request');

const getFlightDetails = (req,res)=>{
  const searchOptions =  {
      "uri": 'http://www.ije-api.tcore.xyz/v1/flight/search-flight',
      'method': 'POST',
      'json': {
        "header": {
            "cookie": "Ko8uZDhBQirmVuRQPR2Y",
        },
        "body": {
            "origin_destinations": [
                {
                    "departure_city": `${req.query.departure_city.toUpperCase()}`,
                    "destination_city": `${req.query.destination_city.toUpperCase()}`,
                    "departure_date": req.query.departure_date,
                    "return_date":req.query.return_date
                }
            ],
            "search_param": {
                "no_of_adult": Number(req.query.no_of_adult),
                "no_of_child": Number(req.query.no_of_child),
                "no_of_infant": Number(req.query.no_of_infant),
                "cabin":  `${req.query.cabin}`
            }
        }
      }
                       
                    }
                    request(searchOptions, function (error, response, body) {
                        // console.log(searchOptions.json.body)
                        if (!error && response.statusCode == 200) {
                          res.render("results",{data:body.body.data.itineraries});
                        } else if(response.statusCode == 422){
                            res.render("error", {errMessage:Object.values(body.body.errors[0]).toString()})
                        } else{
                            console.log(error)
                        }
                      })
                    }
module.exports = getFlightDetails;