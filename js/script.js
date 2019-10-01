const chat = [{
        input: 'Hello',
        output: ['Hi', '你好！', 'What\'s up?']
    },
    {
        input: 'What\'s your favourite colour?',
        output: ['purple', 'orange', 'I hate colours']
    },
    {
        input: 'How are you?',
        output: ['Great!', 'Not doing so well :(', 'Good!']
    }
];

function sortedAnswers(possibleResponses) {
    return possibleResponses.sort((a, b) => a.length - b.length);
}

function getShortestAnswer(answers) {
    return sortedAnswers(answers)[0];
}

function getLongestAnswer(answers) {
    const sorted = sortedAnswers(answers); 
    return sorted[answers.length - 1];
}

function reply(event) {
  event.preventDefault();
  const question = document.querySelector('#input');
  // After you have done this, use the array filter method to filter through your original array (declared in part 1)
  // to return only that element (which will be an object) whose input property matches the value stored in your 
  // ‘question’ variable. HINT: remember to store the return value in another variable so you can access it later. 
  // If done correctly, your return value should be an array with a single object.
  const response = chat.filter(item => item.input.toLowerCase() === question.value.toLowerCase())[0];
  const output = document.querySelector('textarea');
  const filterType = document.querySelector('input[name="filterType"]:checked').value;
  if (!response) {
      output.value = "Sorry, I don't understand!";
  } else {
      if (filterType === 'Random') {
        const randomNumber = Math.floor(Math.random() * 3);
        output.value = response.output[randomNumber];
      } else if (filterType === 'Shortest Answer') {
          output.value = getShortestAnswer(response.output);
      } else if (filterType === 'Longest Answer') {
          output.value = getLongestAnswer(response.output);
      }
  }
}

const form = document.querySelector('form');
form.addEventListener('submit', reply);