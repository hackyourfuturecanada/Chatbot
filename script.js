
//properties added to the array as objec

var chatbot = [{
        input: 'hello',
        output: ['Hi', 'Hello',  'Greetings']},

    {input: 'what is your favourite colour?',
      output: ['I am not sure.', 'I like every one','There are too many to choose from' ]},

    {input: 'how are you?',
     output: ['Fine', 'Great', 'Not so good']},
   ];


//print variable
console.log(chatbot)

//created a function called ‘reply’.
function reply() {
  
//input selected, assigned a variable and turned to lowercase
    let question = document.getElementById("input").value.toLowerCase();

    let filterType = null


  //filter was used to return object which s inside the array  
    const answer = chatbot.filter( item => {return item.input === question} )

//created random number between 0 and 2
    let randomNumber = Math.floor(Math.random()*3);
   
    
//each radio button id assigned to a variable
    let random =document.getElementById('random')
    let shortest =document.getElementById('shortest')
    let longest =document.getElementById('longest')
   
//conditional statement

//if our array has any value of input it will return below condition else will give a massage
    if(answer.length>0){

            //for shortest answer
        if(shortest.checked === true){

            document.getElementById("output").value=answer[0].output[0];

            //for longest answer
        }else if (longest.checked === true){
            document.getElementById("output").value=answer[0].output[2];
      
            //for random answer      
        }else {
            document.getElementById("output").value=answer[0].output[randomNumber];
        }

    }else{
        document.getElementById("output").value="I do not understand that comment. Please enter another."
    }  
}

//attached a 'click' event listener to the <button> element defined in the HTML file.
document.getElementById("submit").addEventListener("click", function() {reply()});
