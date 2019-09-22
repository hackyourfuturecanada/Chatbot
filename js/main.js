/*
Aziz Omar
Chatbot2
*/
// contains all inputs and outputs
let data = [{
        input: 'Hi',
        output: ['Hello', 'Hey !', 'Whats up?']
    },

    {
        input: 'How are you?',
        output: ['good', 'not bad', 'doing well']
    },

    {
        input: 'What is your favourite color?',
        output: ['red', 'gray', 'black']
    },

    {
        input: 'Where are you',
        output: ['home', 'at work', 'on  vacation']
    }
];


/*
iterates through an array to find a question simillar to user's input
*/

const findSimillarQuestion = givenInput => (item) => {
 //   return item.input.toUpperCase().includes(givenInput.toUpperCase());
    return item.input.toUpperCase() == givenInput.toUpperCase();
}



// repaly function
const replay = () => {
    let question = document.getElementById("input").value;
    let txtArea = document.getElementById("output");
    let rndmNumber = Math.floor(Math.random() * data[0].output.length);
    let detectedQuestion = data.filter(findSimillarQuestion(question))[0];

    if (detectedQuestion) {
         let maxAnswer=detectedQuestion.output.sort()[detectedQuestion.output.length-1];
         let minAnswer=detectedQuestion.output.sort()[0]

        //assign the longest answer to maxAnswer
        /*
        detectedQuestion.output.filter(item => {
            if (item.length > maxAnswer.length) maxAnswer = item;
        });
        */
        //assign the shortest answer to minAnswer

        /*detectedQuestion.output.filter(item => {
            if (item.length < minAnswer.length) minAnswer = item;
        });
        */
        if (document.getElementById('shortest').checked)
            txtArea.innerHTML = minAnswer;
        else if (document.getElementById('longest').checked)
            txtArea.innerHTML = maxAnswer;
        else
            txtArea.innerHTML = detectedQuestion.output[rndmNumber];

    } else
        txtArea.innerHTML = "I do not understand that command";

} // end of replay


document.getElementById("submit").addEventListener('click', replay);