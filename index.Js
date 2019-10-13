// I declare a function to get the information from API
function showMedog(){
var chat = new XMLHttpRequest();
chat.onreadystatechange = function() {
   if (chat.readyState == XMLHttpRequest.DONE) {

   		let data = JSON.parse(chat.responseText);
   		console.log(data);


      document.getElementById('image').setAttribute('src', data.message);
    }
}
    chat.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    chat.send();

}

// I declare function to use it for the alert
function delayedAlert(){
setTimeout(function(){alert("Did you forget about me? It is your friend, the Alarm!")}, 2000);

}

//here we are going to define and declare object and inside the object I define two arrays
const object = [
  {
    input:  ['Hello', 'Hi', 'Greetings'],
    output: ["Hi","Hey","Greeting"],
  },
  {
    input: ['What is your favourite colour?', 'Who is your favourite HYF instructor?', 'Who is your role model?'],
    output: ["I am not sure","There are too many to chose from","I like everyone"],
  },
  {
    input:  ['How are you?', 'How is the weather today?', 'How is Canada doing in the Olympics?'],
    output: ["Fine","not so good","great"],
  },
];



//here we define function called reply and this function will let the chatpot to give me the proper anwers based on the input the we give
  function reply(){
    //I defince variable called question and I put inside this variable the value (input from user)
    let question = document.getElementById('input').value;
    let randomNumber = Math.floor(Math.random() * 3);
    let filterType = null;

//let answer = object.filter((item) => item.input.includes(question));

    let answer = object.filter(function(item){
      //if(item.input === question){

      if(item.input.includes(question)){
        return true;
    }
    });

     if(answer.length > 0){

       if(document.getElementById('longest').checked){
         let longest = answer[0].output.sort((a,b) => b.length - a.length);
         document.getElementById('output').textContent = longest[0] + '\n' + document.getElementById('output').textContent;
         console.log(longest[0]);
       }else if(document.getElementById('shortest').checked){
         let shortest = answer[0].output.sort((a,b) => a.length - b.length);
         document.getElementById('output').textContent = shortest[0] + '\n' + document.getElementById('output').textContent;
         console.log(shortest[0]);
       }else if(document.getElementById('random').checked){
          document.getElementById('output').textContent = answer[0].output[randomNumber] + '\n' + document.getElementById('output').textContent;
       }
     }
     // Imn this step i add if statement inside the excisting else in order to do the action when we type "Show mw a dog"
     else{
       if(question === "Show me a dog"){
         showMedog();
       }
    // Imn this step i add if statement inside the excisting else in order to do the action when we type "set an alarm"

       else if (question === "Set an alarm") {
         delayedAlert();
       }
       else{
       document.getElementById('output').textContent = "I don't understand that command. Please enter another";
     }
     }
   }

  document.querySelector('button').addEventListener("click", reply);
