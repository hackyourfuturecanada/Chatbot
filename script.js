//object containing inputs and outputs arrays
let chatInputsOutputs = [
  {
    inputs: 'Hello',
    outputs: ['Hello', 'Hey', 'Greetings'],
  },
  {
    inputs: 'What is your favourite colour?',
    outputs: ['I am not sure.', 'White', 'Blue'],
  },
  {
    inputs: 'How are you?',
    outputs: ['Great!', 'Not bad', 'Good'],
  },
];
let randomNumber = Math.floor(Math.random() * 3);

console.log(chatInputsOutputs);

const answerRandom = item => {
  item[0].outputs[randomNumber];
};
const answerShortest = item => {
  item[0].outputs.reduce((a, b) => (a.length < b.length ? a : b));
};
const answerLongest = item => {
  item[0].outputs.reduce((a, b) => (a.length > b.length ? a : b));
};

const reply = selectedAnswer => {
  let question = document.getElementById('input').value.toLowerCase();
  let filterType = null;

  console.log(question);

  const filteredObject = chatInputsOutputs.filter(
    item => question === item.inputs.toLowerCase(),
  );
  console.log(filteredObject);

  //   document.getElementById('output').value =
  //     chatInputsOutputs.outputs[indexOfQuestion];

  console.log(answerShortest(filteredObject));
  console.log(answerLongest(filteredObject));
  console.log(answerRandom(filteredObject));

  if (filteredObject.length === 1) {
    if (selectedAnswer === 1) {
      document.getElementById('output').value = answerShortest(filteredObject);
    } else if (selectedAnswer === 2) {
      document.getElementById('output').value = answerShortest(filteredObject);
    } else {
      document.getElementById('output').value = answerRandom(filteredObject);
    }
  } else {
    //when the input is not recognized
    document.getElementById('output').value =
      "I don't understand that command. Please enter another.";
  }
};

document.getElementById('submit').addEventListener('click', function() {
  let option = 0;
  if (document.getElementById('longest').checked) {
    option = 1;
  } else if (document.getElementById('shortest').checked) {
    option = 2;
  }
  console.log('submit clicked');
  reply(option);
});
