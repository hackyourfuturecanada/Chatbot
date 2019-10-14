let bot = [{
        input: ["hello!", "how are you?", "how is the weather today?"],
        output: ["Hi", "I am good", "Fantastic?"]
    },
    {
        input: ["what is your name?", "how old are you?", "What is your major?"],
        output: ["Riham", "very old", "astronaut"]
    },
    {
        input: ["where are you from?", "how many language do you speak?", "do you have pets?"],
        output: [" From a planet called the earth", "four ", "no"]
    },

];



let outputDom = document.getElementById("output");

function reply() {
    let question = document.getElementById("input").value.toLowerCase();
    let randomNumber = Math.floor(Math.random() * 3);
    let filterType = null;
    filterType = bot.filter(element =>
        element.input.includes(question)
    );

    let asnwer = ""

    if (filterType.length > 0) {
        let asnwers = filterType[0].output;

        if (document.getElementById("shortest").checked == true) {
            asnwer = asnwers.sort()[0];
        } else if (document.getElementById("longest").checked == true) {
            answer = asnwers.sort()[asnwers.length - 1];

        } else {
            answer = asnwers[randomNumber];
        }
    } else if(question == "show me a dog"){

        showAdog();
    } else if (question== "set an alarm"){
        delayedAlert();
    } else if (question== "show me the weather") {

        showTheWeather();
    }

    else {
        answer = "I do not understand";
    }

    outputDom.innerHTML += `user: ${question}\nbot ${answer}\n`
}


document.getElementById("submit").addEventListener('click', reply);

function showAdog() {
    let dogPics;
    // create object of request 
    let request = new XMLHttpRequest();
    // type GET, and their linke 
    request.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    // send rquest 
    request.send();

    request.onreadystatechange = dogFun;

    function dogFun() {
        console.log(this.responseText)
        let response = this.responseText;
        dogPics = response;

        dogPics = JSON.parse(dogPics);

        document.getElementById("img").src = dogPics.message;
    }

};

function delayedAlert() {
    setTimeout(function() {
        alert("Did you forget about me? it's your friend, the Alarm!")
    }, 3000);

}

// week12

function showTheWeather(){

let weather;

let request2 = new XMLHttpRequest();

request2.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=43.463237899999996&lon=-79.6972186&appid=484e47e5a69dfcd6d1d089e84051d0d5", true);

request2.send();

request2.onreadystatechange = weather2;

function weather2() {
  if (request2.readyState === 4 && request2.status === 200) {
     let answer;
    let response = this.responseText;
    weather = response;
    weather = JSON.parse(weather);
    answer = `Temerture ${weather.main.temp} Pressure ${weather.main.pressure}, Humid ${weather.main.humidity}`;

     outputDom.innerHTML += `user: show me the weather \nbot: ${answer}\n`;
     
    }
}

};