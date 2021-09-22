let request = require("request");

let apiKey = "b09212253bb34d10f0cea10533358e8c";

console.log(apiKey);

 

let city = "jakarta";
let time = "Aug, 22 2021";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" + [city] + "&appid=" + [apiKey];

console.log(url);

 

request(url, function (err, response, body) {

  if (err) {

    console.log("error:", error);

  } else {

    let weather = JSON.parse(body);

    let message = " The weather of " + [city] + " at " + [time] + " is " + "overcast clouds";

    console.log(message);

  }

})