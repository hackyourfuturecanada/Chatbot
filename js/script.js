//1.In your JavaScript code, declare a variable and initialize it as an object.
//2.Add two properties to the object: ‘input’ and ‘output’.
// const chatbot = {
//     input:['hello', 'how are you?', 'what is your favourite colour?'],
//     output:['hi', 'great!', 'i have so many favorites it\'s hard to choose one.']
// };
//console.log(chatbot);
const chatbot = [
    {
        input: 'hello',
        output: ['Hello', 'Hi', 'Greetings']
    },
    {
        input: 'how are you?',
        output: ['Fine', 'Great', 'Not so good']
    },
    {
        input: 'what is your favourite colour?',
        output: ['I am not sure', 'i have so many favorites it\'s hard to choose one.', 'I like every one']
    },

];
//get a random number between 0 and 2

function reply() {

    let randomNumber = Math.floor((Math.random() * 3));
    //get the input value ,, and convert it to lowercase
    let question = document.getElementById('input').value.toLowerCase();
    let filterType = null;
    //get the array mach the input value
    const output = chatbot.filter(item => item.input === question);

    //if there is nothing inside the input then do nothing
    if(question === ''){ return false; }
    appendToOutput(question);
    //check if question founded on the chatbot object
    if(output.length > 0){
        if(document.getElementById('longest').checked){
            lOutput = output[0].output.sort((a, b) => b.length - a.length);
            appendToOutput(lOutput[0], 1);
        }else if(document.getElementById('shortest').checked){
            sOutput = output[0].output.sort((a, b) => a.length - b.length );
            appendToOutput(sOutput[0], 1);
        }else{
            appendToOutput(output[0].output[randomNumber], 1);
        }

    }else{
        //if not found appen this msg to the textarea
        appendToOutput("I don't understand that command. Please enter another.",1);
    }
}

//this function to add a new message to the top of the textarea
function appendToOutput(msg, sender) {
    //who send the msg ? bot or user(you)
    sender = (sender) ? 'Bot':'You';
    //get the old value ot textarea and add to it the new msg
    document.getElementById('output').textContent = sender + ' : ' + msg +'\n'+ document.getElementById('output').textContent;
}


//when the form submited do this >>> ,, i have already changed the type of button to submit , so each click of the button will submit the form
document.getElementById('chatbot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    reply();
    document.getElementById('chatbot-form').reset();

})

