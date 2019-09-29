/*
Aziz Omar
Chatbot2
*/
// contains all inputs and outputs
let data = [{
        input: ['hi','hey!','yo yo'],
        output: ['Hello', 'Hey !', 'Whats up?']
    },

    {
        input: ['how are you?','how is it going?','how are you doing?'],
        output: ['good', 'not bad', 'doing well']
    },

    {
        input: ['what is your favourite color?','what color do you prefer','tell me what color you like'],
        output: ['red', 'gray', 'black']
    },

    {
        input: ['where are you','are you near by','where are you located'],
        output: ['home', 'at work', 'on  vacation']
    }
];


/*
iterates through an array to find a question simillar to user's input
*/

const findSimillarQuestion = givenInput => (item) => {
 //   return item.input.toUpperCase().includes(givenInput.toUpperCase());
    return item.input.includes(givenInput.toLowerCase()) ;
}



// repaly function
const replay = () => {
    let bot;
    let question = document.getElementById("input").value;
    let txtArea = document.getElementById("output");
    let rndmNumber = Math.floor(Math.random() * data[0].output.length);
    let detectedQuestion = data.filter(findSimillarQuestion(question))[0];

    if (detectedQuestion) {
         let maxAnswer= detectedQuestion.output.sort((a,b)=> a.length - b.length )[detectedQuestion.output.length-1];
         let minAnswer= detectedQuestion.output[0];
         console.log(minAnswer)

        if (document.getElementById('shortest').checked){
            bot=minAnswer;
        }
        else if (document.getElementById('longest').checked){
            bot=maxAnswer;
        }
        else{
            bot = detectedQuestion.output[rndmNumber];
            console.log(bot)
        }

    } else{
            bot = " I do not understand the command ";
                }
        // assign the output to teaxtarea
        txtArea.innerHTML +=`You: ${question}\nbot: ${bot}\n\n` ;


} // end of replay


document.getElementById("submit").addEventListener('click', replay);