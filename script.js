const chatbot = [
    {
        input:  ['hello', 'hi', 'greetings'],
        output: ['Hello', 'Hey', 'Greetings']
    },
    {
        input:  ['what is your favourite colour?', 'who is your favourite HYF instructor?', 'who is your role model?'],
        output: ['I am not sure.','There are too many to choose from', 'I like every one']
    },
   
    {
        input:  ['how are you?', 'how is the weather today?', 'how is Canada doing in the Olympics?'],
        output: ['Fine', 'Great', 'Not so good']
    },
 
];


//print variable
console.log(chatbot)

//created a function called ‘reply’.
function reply() {
  
//input selected, assigned a variable and turned to lowercase
    let question = document.getElementById("input").value.toLowerCase();

    

  //filter was used to return object which s inside the array  
    const answer = chatbot.filter( item => item.input.includes(question))

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

            document.getElementById("output").value +="you :  "+question+ '\n';
            
            document.getElementById("output").value +="bot :  "+ answer[0].output.sort((a, b) => a.length - b.length)[0]+ '\n' +'\n';

            //for longest answer
        }else if (longest.checked === true){
          
          
            document.getElementById("output").value +="you :  "+question+ '\n';
          
            document.getElementById("output").value +="bot :  "+answer[0].output.sort((a, b) => b.length - a.length)[answer.length-1]+ '\n' +'\n';
      
            //for random answer      
        }else {
          
          
            document.getElementById("output").value +="you :  "+question+ '\n';
            document.getElementById("output").value += "bot :  "+ answer[0].output.sort((a, b) => b.length - a.length)[randomNumber]+ '\n' + '\n';
        }

    }else{
        document.getElementById("output").value="I do not understand that comment. Please enter another."
    }  
}

//attached a 'click' event listener to the <button> element defined in the HTML file.
document.getElementById("submit").addEventListener("click", function() {reply()});
