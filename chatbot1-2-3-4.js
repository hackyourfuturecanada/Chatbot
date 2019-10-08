let chatbot1 = [
  {
    input: ['Hello'],
    output: ['Hi', 'Salam', 'Hey']
  },
  {
    input: ['How are you?'],
    output: ['Great!', 'It is been going great.', 'I am awesome.']
  },
  {
    input: ['How many languages can you speak?'],
    output: ['I can only speak one.', 'I can speak 2.', 'I am bilingual.']
  }
];

console.log(chatbot1);

function reply() {
  let question = document.querySelector('#input').value.toLowerCase();
  let randomNumber = Math.floor((Math.random() * 3));
  let filterType = null;
  let textarea = document.getElementById("output");
  const output = chatbot1.filter(item => item.input.includes(question));
  if (question === chatbot1.input) {
  textarea.innerHTML = chatbot1.output;
  }
  if (output.length > 0) {
      if (document.getElementById('longest').checked) {
          longOp = output[0].output.sort((a, b) => b.length - a.length);
          appendToOutput(longOp[0], 1);
      }else if (document.getElementById('shortest').checked){
          shortOp = output[0].output.sort((a, b) => a.length - b.length);
          appendToOutput(shortOp[0], 1);
      } else {
          appendToOutput(output[0].output[randomNumber], 1);
      }
      }
      else {
      appendToOutput('I do not understand that command. Please enter another.');
  }
 }
reply();

var listener = document.querySelector('#submit');
listener.addEventListener('click', function(e) {
    e.preventDefault();
    reply();
    document.querySelector('#submit').reset();
}) // assigning to it AN addEventListener.
//==============================================================================
//CHATBOT FOUR
function showDog() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            let url = JSON.parse(xmlHttp.responseText).message;
            document.querySelector('#show-content  img').setAttribute('src', url)
            document.getElementById('show-content').classList.remove('hide');
        }
    }
    xmlHttp.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    xmlHttp.send();
}

function delayedAlert() {
    setTimeout(function() {
        alert("Did you forget about me? it's your friend, the Alarm!")
        }, 2000);
}
