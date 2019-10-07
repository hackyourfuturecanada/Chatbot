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
    let randomNumber = Math.floor((Math.random() * 3));
    let question = document.getElementById('input').value();
    let filterType = null;
    const output = chatbot.filter(item => item.input.includes(question));

    if(question === ''){ return false; }
    appendToOutput(question);

    if(output.length > 0){
        if(document.getElementById('longest').checked){
            long = output[0].output.sort((a, b) => b.length - a.length);
            appendToOutput(long[0], 1);
        }else if(document.getElementById('shortest').checked){
            short = output[0].output.sort((a, b) => a.length - b.length );
            appendToOutput(sOutput[0], 1);
        }else{
            (output[0]['output'].length > 1)? appendToOutput(output[0].output[randomNumber], 1):appendToOutput(output[0].output[0], 1);
        }
    }else{
        //if the question not found in out dataDase show this msg to the user
        appendToOutput("I don't understand that command. Please enter another.",1);
    }
}

function appendToOutput(msg, sender) {
    if (typeof msg == 'function') {
        msg();

        appendToOutput("With pleasure", 1)
        return false;
    }
    sender = (sender) ? 'ChatBot':'You';
    let newLine = (sender === 'ChatBot')? '\n':'\n\n';
    document.getElementById('output').textContent = sender + ' : ' + msg + newLine + document.getElementById('output').textContent;
}



document.querySelector('.close').addEventListener('click', function(e) {
    document.getElementById('show-content').classList.add('hide');
});

document.getElementById('chatbot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    reply();
    document.getElementById('chatbot-form').reset();
});


let image = new XMLHttpRequest();
image.onreadystatechange = function() {
   if (image.readyState == 4) {
	//alert(http.responseText);
  let url = JSON.parse(image.responseText).message;
   }
}

variable1.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
variable1.send(null);


//set timout for 2 seconds
function delayAlert(){
    setTimeout(function(){alert("Did you forget about me? it's your friend, the Alarm!")}, 2000);
}
