// Input and output contents declared
const chatbotIO = [
    {
        input :  ['hello', 'hi', 'greetings'],
        output : ['Hello', 'Hi', 'Hey']
    },
    {
        input  : ['what is your favourite colour?', 'who is your favourite HYF instructor?', 'who is your role model?'],
        output : ['I am not sure', 'I like every color', 'Orange']
    },
    {
        input : ['how are you?', 'how is the weather today?', 'how is canada doing in the olympics?'],
        output : ['Great', 'Cool', 'Good']
    },
    {
        input : 'show me a dog',
        output: ['dog']
    },
    {
        input: 'set an alarm',
        output: ['alarm']
    },
    {
        input: 'show me the weather',
        output: ['getWeather']
    }

]

    // just check chatbot input output content on console 
    const list = chatbotIO.filter(io => io);

    // random fuction, every time show rondom answer
    const random = (io) => io[0].output[Math.floor(Math.random()*3)];
    // shortest function, every time show shortest answer
    const shortest = (io) => io[0].output.reduce((first, second) => first.length <= second.length ? first : second);
    // longest function, every time show longest answer
    const longest = (io) => io[0].output.reduce((first, second) => first.length >= second.length ? first : second);

    // comparison of two values(user input and our input) and call push content function
function reply(radioButton){
    const questionValue = document.querySelector('#input').value;
    let filterOutput = '';
    // i checked that if array input value is equal to our input value 
    const filterIO = chatbotIO.filter(ios => { 
        if(ios.input.includes(questionValue.toLowerCase())){
        filterOutput = ios.output[0];
        return ios.input.includes(questionValue.toLowerCase());
        }
         
    })
    // first i call function if output is dog or alarm. and response minumum 1 object if input type is inside the array. After i call pushContent() function which button clicked.
    if(filterOutput === 'dog'){
        showDogRandom();
    } else if(filterOutput === 'alarm'){
        setAnAlarm();
    } else if(filterOutput === 'getWeather'){
        city = 'Toronto';
        apiKey ='620ff778dc8d41a5fe7a7f168ba90d92';
        getWeather(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(response => {
            pushContent(questionValue,`Toronto weather today is ${response.weather[0].description} and Toronto's temperature is ${Math.floor(response.main.temp-273.15)}`);
        })
        .catch(err=>console.log(err));
    } else if(filterIO.length === 1){
            if(radioButton === 'longest'){
                pushContent(questionValue,longest(filterIO)); 
            } else if(radioButton === 'shortest'){
                pushContent(questionValue,shortest(filterIO)); 
            } else {
                pushContent(questionValue,random(filterIO));
            }
    } else {
        const undefinedContent = 'I don\'t understand that command. Please enter another command.';
        pushContent(questionValue, undefinedContent);
    }    
}

// Push and storage every content for user and chatbot.
function pushContent(questionValue, chatbotValue){
    const selectedOutput =  document.querySelector('#output');
    selectedOutput.textContent += `You: ${questionValue}\nChatbot: ${chatbotValue}\n\n`;
}

// run reply function after click submit method and control which button clicked.
document.querySelector('#submit').addEventListener('click', function(){

    if(document.getElementById('longest').checked){
        reply('longest');
    } else if(document.getElementById('shortest').checked){
        reply('shortest');
    } else{
        reply('random');
    }
    
})

// Get dog images from API and set image source with url which from came API
function showDogRandom(){
    console.log('show dog');
    let getImage = new XMLHttpRequest();
    getImage.onreadystatechange = function(){
        if(getImage.readyState == XMLHttpRequest.DONE){
            const data = JSON.parse(getImage.responseText).message;
            const imageElement = document.querySelector('#dog-image');
            const randomImageElement = document.querySelector('.random-dog-image');
            imageElement.setAttribute('style','display:inline');
            randomImageElement.src = data;
        }
    }
    getImage.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    getImage.send();
}
// show alert after write ser an alarm
function setAnAlarm(){
    alert('Did you forget about me? It’s your friend, the Alarm!');
}

// get Weather from openweathermap api

async function getWeather(url){
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

