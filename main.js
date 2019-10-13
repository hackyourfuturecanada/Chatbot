let dogEndpoint = 'https://dog.ceo/api/breeds/image/random';
let history = [];
let h_input = document.getElementById('input');
let h_output = document.getElementById('output');

//object containing inputs and outputs arrays
let chatInputsOutputs = [
  {
    inputs: ['Hello', 'Hi', 'Greetings'],
    outputs: ['Hello', 'Hey', 'Greetings'],
  },
  {
    inputs: [
      'What is your favourite colour?',
      'Who is your favourite HYF instructor?',
      'Who is your role model?',
    ],
    outputs: [
      'I am not sure.',
      'There are too many to choose from.',
      'I like everyone.',
    ],
  },
  {
    inputs: [
      'How are you?',
      'How is the weather today?',
      'How is Canada doing in the Olympics?',
    ],
    outputs: ['Fine', 'Great', 'Not so good'],
  },
];

const randomNumberGenerator = () => Math.floor(Math.random() * 3);

console.log(chatInputsOutputs);

//answer based on the option selected in the radio button
const answerRandom = item => {
  return item[0].outputs[randomNumberGenerator()];
};

const answerShortest = item => {
  return item[0].outputs.reduce((a, b) => (a.length < b.length ? a : b));
};

const answerLongest = item => {
  return item[0].outputs.reduce((a, b) => (a.length > b.length ? a : b));
};

// reply function
const reply = selectedAnswer => {
  let question = h_input.value;
  console.log(question);

  history.push('You: ' + question + '\n');

  console.log(history);

  const filteredObject = chatInputsOutputs.filter(item => {
    return item.inputs
      .map(item => item.toLowerCase())
      .includes(question.toLowerCase());
  });

  if (question.toLowerCase().includes('dog')) {
    console.log('if dog question');
    getPhotos();
  } else if (question.toLowerCase().includes('alarm')) {
    setAlarm();
  } else if (filteredObject.length === 1) {
    if (selectedAnswer === 1) {
      history.push('Computer: ' + answerLongest(filteredObject) + '\n\n');
    } else if (selectedAnswer === 2) {
      history.push('Computer: ' + answerShortest(filteredObject) + '\n\n');
    } else {
      history.push('Computer: ' + answerRandom(filteredObject) + '\n\n');
    }
  } else {
    //when the input is not recognized
    history.push(
      "Computer: I don't understand that command. Please enter another. \n\n",
    );
  }
};

function setAlarm() {
  setTimeout(function() {
    history.push(
      'Computer: Did you forget about me? It’s your friend, the Alarm! \n\n',
    );
    outputPrinter(history);
    alert('Did you forget about me? It’s your friend, the Alarm!');
  }, 2000);
}

// Event listener of submit button
document.getElementById('submit').addEventListener('click', function() {
  let option = 0;
  if (document.getElementById('longest').checked) {
    option = 1;
  } else if (document.getElementById('shortest').checked) {
    option = 2;
  }
  reply(option);
  outputPrinter(history);
});

function getPhotos() {
  let xhr = new XMLHttpRequest();
  let ERROR_MESSAGE = 'Something bad happened!';
  let data = '';
  let message = '';
  console.log('/////////', 'getPhotos');

  xhr.onreadystatechange = function() {
    console.log('aaaaaa', 'onreadystate');

    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log('/////////', 'DONE');

      data = JSON.parse(xhr.response);
      console.log(data);
      message = data.message;
      console.log('history: ', history);
      console.log('message: ', message);
      history.push(message);
      outputPrinter(history);
    } else {
      message = ERROR_MESSAGE;
    }
  };

  xhr.open('GET', dogEndpoint, true);
  xhr.send();

  return message;
}

const outputPrinter = history => {
  let outputToPrint = '';
  let historyWithLink = history.map(item => {
    console.log('item: --- ', item);
    if (item.substring(0, 6) === 'https:') {
      let linkA = `<img src= '${item}' width="500" height="600"> 
        <br></br>`;
      document.getElementById('dog').innerHTML = linkA;
      return `Computer: How is this dog? \n\n `;
    }
    return item;
  });
  historyWithLink.forEach(item => (outputToPrint += item));

  h_output.innerHTML = outputToPrint;
};
