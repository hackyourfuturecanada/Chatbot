const ioChatbot= [
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


console.log(ioChatbot)

//for function 
function reply() {

    let question = document.getElementById("input").value.toLowerCase();

    

    const response = ioChatbot.filter( item => item.input.includes(question))

// for value 0 to 2 
    let randomNumber = Math.floor(Math.random()*3);
   

// for longest , shortest , random responses 
    if(response.length>0){

        if(document.getElementById('shortest').checked === true){

            document.getElementById("output").value +="you :  "+question+ '\n' + "computer :  "+ response[0].output.sort((a, b) => a.length - b.length)[0]+ '\n' +'\n';

        }else if (document.getElementById('longest').checked === true){
          
          
            document.getElementById("output").value +="you :  "+question+ '\n'+"computer :  "+response[0].output.sort((a, b) => b.length - a.length)[response.length-1]+ '\n' +'\n';
         
        }else {
          
          
            document.getElementById("output").value +="you :  "+question+ '\n' +"computer :  "+ response[0].output.sort((a, b) => b.length - a.length)[randomNumber]+ '\n' + '\n';
        }

    }else{
        document.getElementById("output").value="I do not understand that comment. Please enter another."
    }  
}

document.getElementById("submit").addEventListener("click", function() {reply()});
