const Location = require('../models/location')
const { response } = require('../server')

module.exports={
    index,
    // weatherQuery,
    // weatherLocation
}

function index(req, res){
    Location.find({}).then((users, locations)=>{
        res.render('locations/places',{
            title: "Kid-Friendly Explorations & Experiences", user: req.user, users, locations
        })
    })
}

// function weatherQuery(req, res){
//     axois.get(`http://api.openweathermap.org/data/2.5/forecast?q=${req.body.city}&appid=${process.env,WEATHER_API_KEY}`)
//     .then((user, response)=>{
//         res.render('locations/places',{user, user: req.user, WeatherData:response.data})
//     })
// }

// function weatherLocation (req, res){
//     res.render('locations/places',{weatherData: null, user: req.user})
// }