//I declared variable for three user input
 //and, each input have three possible output.

 var firstData = [
   {input: "hello",
   output : ["Hey", "Hello", "Greetings"]},

   {input: "how are you:?",
   output:["Fine", "Great", "Not so good"]},

   {input:"what is your favorite colour?",
   output: ["I am not sure.", "I like everyone.", "There are too many to choose from."]}

 ]

console.log(firstData);

function reply(){

  // this variable taking the input from what user type and make it lowercase
  var question = document.querySelector("#input").value.toLowerCase();
  console.log(question);

  // this is for to choose random number from 0 to 2
  var randomNumber =  Math.floor((Math.random() * 3 )) + 0 ;
  console.log(randomNumber);

  // I assigned an array with no value.
  var filterType = null;

  const filtered = firstData.filter(item => {return item.input === question});

// declared variables to assigned radio buttons with their id's

let random = document.querySelector("#random");
let shortest = document.querySelector("#shortest");
let longest = document.querySelector("#longest");

// declared conditional statment to check user's input and data input



  if(filtered.length > 0){

    //if the user choose shortest answer
    if(shortest.check === true){
      document.querySelector("#output").value = filtered[0].output[0];

        //if the user choose longest answer
    }else if(longest.check === true){
      document.querySelector("#output").value = filtered[0].output[2];

      //if the user choose random answer
    }else {
      document.querySelector("#output").value = filtered[0].output[randomNumber];
    }

    // if the user enters a reply that is not in my data
  }else {
    document.querySelector("#output").textContent = "I don't understand that command. Please enter another";
  }

// I attached a 'click' event listener to button to call function.
document.getElementById("submit").addEventListener("click", function() {reply()});
