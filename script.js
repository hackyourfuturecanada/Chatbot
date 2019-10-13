function showMeADog(){
  //get a dog image from API
  let dataRequest = new XMLHttpRequest();
  dataRequest.onreadystatechange = function(){
    if(dataRequest.readyState == 4){
      //change the returned data from API to Object, and get the url from .message
      let imageUrl = JSON.parse(dataRequest.responseText).message;
      //change img attr -src- to the url from API
      document.querySelector('#show-content img').setAttribute('src', imageUrl);
      //remove the class hide from the element to show the image
      document.getElementById('show-content').classList.remove('hide');
    }
  }
  //the url for API ,, and then send the request
  dataRequest.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  dataRequest.send();
}

function delayedAlert(){
  setTimeout(function(){
    alert("Did you forget about me? it's your friend, the Alarm!")
  }, 2000);
}

const chatbot = [
  {
      input: ['Hello', 'Hi', 'Greetings'],
      output: ['Hello', 'Hi', 'Greetings']
  },
  {
      input: ['how is class', 'how are you enjoying class', 'how do you like class'],
      output: ['Fantastic', 'Amazing', 'Bad']
  },
  {
      input: ['do you like to code?', 'do you like to code', 'do you like css'],
      output: ['I am not sure', 'Not at all', 'I love it']
  },
  {
      input: ['show me a dog'],
      output: [showMeADog]
  },
  {
      input: ['set an alarm'],
      output: [delayedAlert]
  }

  {
      input: ['Show Me The Weather'],
      output: [ShowMeTheWeather]
  }
];

const sendResponse = () => {
    let randomNumber = Math.floor((Math.random() * 3));
    let question = document.getElementById('user-input').value.toLowerCase();

    if(question === ''){ return false; }
    appendToOutput(question, false);

    const output = chatbot.filter(item => item.input.map(item => item.toLowerCase()).includes(question));

    if (output.length > 0){
      if (document.getElementById('longest').checked) {
        const longestOutput = output[0].output.sort((a, b) => b.length - a.length);
        appendToOutput(longestOutput[0], true);
      } else if(document.getElementById('shortest').checked) {
        const shortestOutput = output[0].output.sort((a, b) => a.length - b.length );
        appendToOutput(shortestOutput[0], 1);
      } else{
        //check if the output array has more than value,, if yes get a random one else get the first one
        (output[0]['output'].length > 1)
          ? appendToOutput(output[0].output[randomNumber], 1)
          :appendToOutput(output[0].output[0], 1);
      }
    } else {
      appendToOutput("I don't understand that command. Please enter another.", true);
    }
}

const appendToOutput = (msg, sender) => {
    if (msg instanceof Function) {
        msg();//call the function ,, which got from the output

        //add an answer on the chat history
        appendToOutput("With pleasure", 1)
        return false;
    }
    sender = (sender) ? 'Bot':'You';
    document.getElementById('output').textContent = sender + ' : ' + msg +'\n'+ document.getElementById('output').textContent;
}

document.getElementById('chatbot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    sendResponse();
    document.getElementById('chatbot-form').reset();

})

// async function
async function ShowMeTheWeather() {
  // await response of fetch call
  let response = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=TORONTO,CA&APPID={65fb059755e7e579db81a98b5956bba7
}');
// only proceed once promise is resolved
let data = await response.json();
// only proceed once second promise is resolved
return data;
}
// trigger async function
// log response or catch error of fetch promise

fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))
