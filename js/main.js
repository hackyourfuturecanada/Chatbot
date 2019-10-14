let data = [{
    input: ['hi', 'hey!', 'yo yo'],
    output: ['Hello', 'Hey !', 'Whats up?']
  },
  {
    input: ['how are you?', 'how is it going?', 'how are you doing?'],
    output: ['good', 'not bad', 'doing well']
  },

  {
    input: ['what is your favourite color?', 'what color do you prefer?', 'tell me what color you like?'],
    output: ['red', 'gray', 'black']
  },

  {
    input: ['where are you', 'are you near by', 'where are you located'],
    output: ['home', 'at work', 'on  vacation']
  },
  {
    input: ['show me a dog', 'can you display a dog ? ', 'do you have photos of dogs? '],
    output: [displayAdog]
  },
  {
    input: ['show me the weather', 'what is the weather like today?', 'what is the temperature?'],
    output: [getWeather]
  }
];

const findSimillarQuestion = givenInput => (item) => {
  return item.input.includes(givenInput);
}

const reply = () => {
  let bot;
  let question = document.getElementById("input").value;
  let output = document.getElementById("output");
  let img = document.getElementById("img");
  question = question.toLowerCase();
  let rndmNumber = Math.floor(Math.random() * data[0].output.length);
  let detectedQuestion = data.filter(findSimillarQuestion(question))[0];
  //console.log(detectedQuestion);
  if (detectedQuestion) {
    temp = detectedQuestion;
    if (typeof detectedQuestion.output[0] == "string") {
      bot = detectedQuestion.output[rndmNumber];
      img.style.display = 'none';
    } else {
      bot = "ok";
      detectedQuestion.output[0]();
    }
  } else {
    img.style.display = 'none';
    bot = " I was not programmed to understand this command ";
  }
  output.textContent = bot;
} // end of reply


document.getElementById("say").addEventListener("click", reply);

//diplay an image of a dog 
function displayAdog() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let img = document.getElementById("img");
      img.style.display = 'block';
      img.src = (JSON.parse(this.responseText)).message;
    }
  }
  xhttp.send();

}


// get longitude and latitude of user, using their location
function getCoordinates() {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, function () {
        reject(Error('user did not give permission to use their location'));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      resolve({
        'lat': lat,
        'lon': lon
      });

    }

  });

}




// make an xmlHtppRequest
function makeRequest(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });

    };
    xhr.send();
  });
}


/*

*/
async function getWeather() {
  try {
    let userCoordinates;
    let coordinates;
    userCoordinates = await getCoordinates().catch(e => {
      coordinates = {
        "lat": 0,
        "lon": 0
      };
      console.log('Error: ', e.message)
      alert(e.message);
    });


    if (!coordinates) {
      coordinates = userCoordinates;
    }


    let lat = coordinates.lat;
    let lon = coordinates.lon;

    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e80c522abcec7f0f2549264809902922`;
    let response = await makeRequest("GET", url);

    response = JSON.parse(response);
    let temp = (response.main.temp - 273).toFixed(0);
    let cloud = response.weather[0].description;
    let city = response.name;

    let output = document.getElementById("output");
    //assign the weather to output 
    output.textContent = `Temprature: ${temp} C | cloud: ${cloud} | in ${city}`;
  } catch (err) {
    console.log("err" + err);
    console.log("err" + err.status);
  }


}






// concatenate all questions into a single array 
let inputsData = [];
data.forEach(function (item) {
  inputsData = inputsData.concat(item.input)
});


/*
	Takes an array of strings, a callback function, and a string 
	pass each item of the given array, and the given string to the callback function 
	store the returned value from the callback in an array and returns it
*/
function compare(arr, callBack, question) {
  let records = [];
  arr.forEach(function (item, index) {
    records.push(callBack(item, question));
  });
  return records;
};





/*
	Takes two strings compares their chars, and return the number of first simillar chars
*/
function compareChars(str1, str2) {
  let counter = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === str2[i]) {
      counter++;
    } else {
      break;
    }
  }
  return counter;
}


let input = document.getElementById("input");
let placeHolder = document.getElementsByClassName("placeholder")[0];
let arrowIcon = document.getElementById("arrow");

// input on typing 
input.addEventListener("input", function () {
  // array contains number of simillar chars comparing to each input question 
  let comparedInputs = compare(inputsData, compareChars, input.value);

  // item with largest value is closest to the users question 
  let maxItem = Math.max(...comparedInputs);

  // get the index of the largest Item 
  let index = comparedInputs.indexOf(maxItem)

  // get the most similar question from the data 
  let similarQuestion = inputsData[index];

  // assign the most similar question to user's input to place holder
  placeHolder.attributes["data-placeholder"].value = similarQuestion;

});


/// arrow symbol on click replaces input text with its place holder 
input.addEventListener('keydown', function (event) {
  if (event.key == "ArrowRight") {
    // assign  place holder value to input value 
    input.value = placeHolder.attributes["data-placeholder"].value;
  }
});


/// arrow icon on click replaces input text with its placeholder 
arrowIcon.addEventListener('click', function (event) {
  // assign  place holder value to input value 
  input.value = placeHolder.attributes["data-placeholder"].value;

});