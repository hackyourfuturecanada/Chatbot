//I declared variable for users inputs
 //and, each input have three possible output.

 var firstData = [
   {input: ['hello', 'hi', 'greetings'],
   output : ["Hey", "Hello", "Greetings"]},

   {input: ['what is your favourite colour?', 'who is your favourite hyf instructor?', 'who is your role model?'],
   output: ['I am not sure.', 'There are too many to choose from.', 'I like everyone.']},

   {input: ['how are you?', 'how is the weather today?', 'how is canada doing in the olympics?'],
   output: ['Fine', 'Great', 'Not so good']}

 ]

//console.log(firstData);

function reply(){

  // this variable taking the input from what user type and make it lowercase
  var question = document.querySelector("#input").value.toLowerCase();
  console.log(question);

  // this variable will store the answers from the chatBot
  var history = document.querySelector("#output");

  // this is for to choose random number from 0 to 2
  var randomNumber =  Math.floor((Math.random() * 3 ));
  console.log(randomNumber);

  // I assigned an array with no value.
  var filterType = null;

// this variable searching the input arrays for possible answers.

const filtered = firstData.filter((item) => item.input.includes(question));

console.log(filtered);

/* second way
function objFromfirstData(item){
  if(item.input === question){
    return item.output ;
  }
};

const filtered = firstData.filter(objFromfirstData); */

let shortAnswer = output[0].output.sort((a, b) => a.length - b.length );
let longAnswer = output[0].output.sort((a, b) => b.length - a.length);
/*  I declared a conditional statement to check if users input and data input are matching or not.
If they are matching, it will give the possible answer depends on which radio button that user clicked. */

  if(filtered.length > 0)
  {

    //if the user choose shortest answer
    if(document.querySelector("#shortest").checked === true)
    {
      computer = shortAnswer;

        //if the user choose longest answer
    }
    else if(document.querySelector("#longest").checked === true){

      computer = longAnswer;

      //if the user choose random answer
    }
    else {
      computer = filtered.output[randomNumber];
    }

    // if the user enters a input that is not in the input data
  }
  else {
    history.textContent = "I don't understand that command. Please enter another";
  }

  history.innerHTML += `You: ${question}\nbot: ${computer}\n`
}


// I attached a 'click' event listener to button to call function.
document.getElementById("submit").addEventListener("click", function() {reply()});
