/*
Aziz Omar
Chatbot2
*/
// contains all inputs and outputs
let data = [{
        input: ['hi', 'hey!', 'yo yo'],
        output: ['Hello', 'Hey !', 'Whats up?']
    },

    {
        input: ['how are you?', 'how is it going?', 'how are you doing?'],
        output: ['good', 'not bad', 'doing well']
    },

    {
        input: ['what is your favourite color?', 'what color do you prefer', 'tell me what color you like'],
        output: ['red', 'gray', 'black']
    },

    {
        input: ['where are you', 'are you near by', 'where are you located'],
        output: ['home', 'at work', 'on  vacation']
    }
];


/*
iterates through an array to find a question simillar to user's input
*/

const findSimillarQuestion = givenInput => (item) => {
    //   return item.input.toUpperCase().includes(givenInput.toUpperCase());
    return item.input.includes(givenInput);
}



// repaly function
const replay = () => {

    let bot;
    let question = document.getElementById("input").value;
    question = question.toLowerCase();
    let txtArea = document.getElementById("output");
    let rndmNumber = Math.floor(Math.random() * data[0].output.length);
    let detectedQuestion = data.filter(findSimillarQuestion(question))[0];
    let img = document.getElementById('img');
    // remove the src from img to hide it 
    img.src = "";
    // display textarea 
    txtArea.style.display = 'block';

    if (detectedQuestion) {
        let maxAnswer = detectedQuestion.output.sort((a, b) => a.length - b.length)[detectedQuestion.output.length - 1];
        let minAnswer = detectedQuestion.output[0];
        console.log(minAnswer)
        if (document.getElementById('shortest').checked) {
            bot = minAnswer;
        } else if (document.getElementById('longest').checked) {
            bot = maxAnswer;
        } else {
            bot = detectedQuestion.output[rndmNumber];
        }

    } else if (question == "show me a dog") {
        // hide txt area
        txtArea.style.display = 'none';
        // call function to display an image of a dog 
        displayAdog();
        bot = "an image of dog is displayed"
    } else if (question == "set an alarm") {
        bot = "ok !";
        delayedAlert();
    } else {
        bot = " I do not understand the command ";
    }
    // assign the output to teaxtarea
    txtArea.innerHTML += `You: ${question}\nbot: ${bot}\n\n`;


} // end of replay



// show alert in 3seconds
function delayedAlert() {
    setTimeout(function () {
        alert("Did you forget about me? It’s your friend, the Alarm");
    }, 3000)
}

//diplay an image of a dog 
function displayAdog() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let img = document.getElementById("img");
            img.src = (JSON.parse(this.responseText)).message;
        }
    }

    xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true);
    xhttp.send();


}


document.getElementById("submit").addEventListener('click', replay);