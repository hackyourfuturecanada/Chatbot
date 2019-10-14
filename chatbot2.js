//I declared variable for users inputs
 //and, each input have three possible output.

 var firstData = [
   { input: ['hello', 'hi', 'greetings'],
     output : ["Hey", "Hello", "Greetings"]
   },

   { input: ['what is your favourite colour?', 'who is your favourite hyf instructor?', 'who is your role model?'],
     output: ['I am not sure.', 'There are too many to choose from.', 'I like everyone.']
   },

   { input: ['how are you?', 'how is the weather today?', 'how is canada doing in the olympics?'],
     output: ['Fine', 'Great', 'Not so good']
   },

   { input: "show me a dog",
     output: [showMeaDog]
   },

   { input: "set an alarm",
     output: [delayedAlert]
   }
 ];

function reply(){
  // this variable taking the input from what user type and make it lowercase
  var question = document.querySelector("#input").value.toLowerCase();

  // this variable will store the answers from the chatBot
  var history = document.querySelector("#output");

  // this is for to choose random number from 0 to 2
  var randomNumber =  Math.floor((Math.random() * 3 ));

  // I assigned an array with no value.
  var filterType = null;

// this variable searching the input arrays for possible answers.
const filtered = firstData.filter((item) => item.input.includes(question));

/*  I declared a conditional statement to check if users input and data input are matching or not.
If they are matching, it will give the possible answer depends on which radio button that user clicked. */
if(question === ''){return false;}
addToOutput(question);
if(output.length > 0){
  if(document.getElementById('longest').checked){
    longOutput = output[0].output.sort((a, b) => b.length - a.length);
    addToOutput(longOutput[0], 1);
  }else if(document.getElementById('shortest').checked){
    shortOutput = output[0].output.sort((a,b) => a.length - b.length);
    addToOutput(shortOutput[0], 1);
  }else{
    addToOutput(output[0].output[randomNumber], 1);
  }
}else{
  addToOutput("I don't understand that command. Please enter another.", 1);
}

function addToOutput(msg, sender){
  sender = (sender) ? 'Bot':'You';
  document.getElementById('output').textContent = sender + ' : ' + msg + '\n' + document.getElementById('output').textContent;
}
  }
//  attached a 'click' event listener to button to call function.
document.getElementById("submit").addEventListener("click", function(){
  reply()
});

function showMeaDog(){
 var image = new XMLHttpRequest();
  image.onreadystage = function() {
    if (image.readyStage === 4){
      const data = JSON.parse(image.responseText);

      document.getElementById("apiImage").setAttribute('src', data.message)
    }
  }
  image.open('GET', "https://dog.ceo/api/breeds/image/random", true);
  image.send(null);
}

// function to show a message after 2 seconds
function delayedAlert(){
  setTimeout( function(){
    alert("Did you forget about me? It’s your friend, the Alarm!");},2000);
}
