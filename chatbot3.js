const chatbot = [

{
input: ['Hola', 'Hi', 'Oi'],
output: ['Hello', 'Hey', 'Greetings']
},
{
 input: ['What is your favourite cusine?', 'Who is your Hero?', 'Who is your role model?'],
output: ['I am not sure.', 'There are too many to choose from.', 'I like everyone.'],
},
{
 input: ['How are you?', 'How is the weather today?', 'How is Canada doing in the Olympics?'],
output: ['Fine', 'Great', 'Not so good'],
},
];

/*
It should now look like this:

{
	input: ['Hello', 'Hi', 'Greetings'],
	output: ['Hello', 'Hey', 'Greetings']
},
{
*/

function reply() {

    let randomNumber = Math.floor((Math.random() * 3));
    let question = document.getElementById('input').value;
    let filterType = null;

    let answer = chatbot.filter(function(item){
      if(item.input.includes(question)){
        return true
      }
    });

if (answer.length > 0){
  if(document.getElementById('longest').checked){
    let long = answer[0].output.sort((a,b) => b.length - a.length);
};

else if (document.getElementById('shortest').checked){
  let short = answer[0].output.sort((a,b) => b.lenght - a.length);
};

else if (document.getElementById('random').checked){
  let random = answer[0].output.sort((a,b) => b.lenght - a.length);
};

else {
  document.getElementById('output').textContent = "I don't understand that command. Please enter another"
};
  
