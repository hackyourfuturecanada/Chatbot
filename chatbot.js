const chatbot = [
    {
        input: 'Hello',
        output: ['Hola', 'Hi, 'Hey']},

    {
        input: 'how are you?',
        output: ['Fine', 'Good', 'Not Bad']},

    {
        input: 'what is your favourite colour?',
        output: ['I like Blue', 'I like Purple', 'I like all colors']},

];

//console.log();

function reply ()
let question = document.getElementById('input').value.toLowerCase();
document.getElementById("demo").innerHTML = question;
let randomNumber = Math.floor((Math.random() * 3) + 0);
let filterType = null;
const output = chatbot.filter(item => item.input === question);
if(question === ''){ return false; }
appendQ (question)
if(output.length > 0){
