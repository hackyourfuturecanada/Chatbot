//1.In your JavaScript code, declare a variable and initialize it as an object.
//2.Add two properties to the object: ‘input’ and ‘output’.
const chatbot = [
    {
        input:  ['hello', 'hi', 'greetings'],
        output: ['hello', 'hey', 'greetings']
    },
    {
        input:  ['how are you?', 'how is the weather today?', 'how is Canada doing in the Olympics?'],
        output: ['fine', 'great', 'not so good']
    },
    {
        input:  ['what is your favourite colour?', 'who is your favourite HYF instructor?', 'who is your role model?'],
        output: ['i am not sure', 'i have so many favorites it\'s hard to choose one.', 'i like every one']
    },
    {
        input: ['show me a dog'],
        output: [showMeADog]
    },
    {
        input: ['set an alarm'],
        output: [delayedAlert]
    }

];



function reply() {
    //get a random number between 0 and 2
    let randomNumber = Math.floor((Math.random() * 3));

    //get the input value ,, and convert it to lowercase
    let question = document.getElementById('input').value.toLowerCase();
    let filterType = null;
    //get the array mach the input value
    const output = chatbot.filter(item => item.input.includes(question));

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
            //check if the output array has more than value,, if yes get a random one else git the first one
            (output[0]['output'].length > 1)? appendToOutput(output[0].output[randomNumber], 1):appendToOutput(output[0].output[0], 1);
        }
    }else{
        //if the question not found in out dataDase show this msg to the user
        appendToOutput("I don't understand that command. Please enter another.",1);
    }
}

//this function to add a new message to the top of the textarea
function appendToOutput(msg, sender) {
    if (typeof msg == 'function') {
        msg();//call the function ,, which got from the output

        //add an answer on the chat history
        appendToOutput("With pleasure", 1)
        return false;
    }
    //who send the msg ? bot or user(you)
    sender = (sender) ? 'ChatBot':'You';
    let newLine = (sender === 'ChatBot')? '\n':'\n\n';
    //get the old value ot textarea and add to it the new msg
    document.getElementById('output').textContent = sender + ' : ' + msg + newLine + document.getElementById('output').textContent;
}


//event listener to close the image when click on x
document.querySelector('.close').addEventListener('click', function(e) {
    document.getElementById('show-content').classList.add('hide');
});

//when the form submited do this >>> ,, i have already changed the type of button to submit , so each click of the button will submit the form
document.getElementById('chatbot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    reply();
    document.getElementById('chatbot-form').reset();
});


//function to get a dog image from API and show it on the HTML page
function showMeADog(){
    //get a dog image from API
    let image = new XMLHttpRequest();
    image.onreadystatechange = function(){
        if(image.readyState == 4){
            //change the returned data from API to Object, and get the url from .message
            let url = JSON.parse(image.responseText).message;
            //change img attr -src- to the url from API
            document.querySelector('#show-content img').setAttribute('src', url);
            //remove the class hide from the element to show the image
            document.getElementById('show-content').classList.remove('hide');
        }
    }
    //the url for API ,, and then send the request
    image.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
    image.send();
}

function delayedAlert(){
    setTimeout(function(){
        alert("Did you forget about me? it's your friend, the Alarm!")
    }, 2000);
}



