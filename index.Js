
//here we are going to define and declare object and inside the object I define two arrays
const object = [
  {
    input:  ['Hello', 'Hi', 'Greetings'],
    output: ["Hi","Hey","Greeting"],
  },
  {
    input: ['What is your favourite colour?', 'Who is your favourite HYF instructor?', 'Who is your role model?'],
    output: ["I am not sure","There are too many to chose from","I like everyone"],
  },
  {
    input:  ['How are you?', 'How is the weather today?', 'How is Canada doing in the Olympics?'],
    output: ["Fine","not so good","great"],
  },
];



//here we define function called reply and this function will let the chatpot to give me the proper anwers based on the input the we give
  function reply(){
    //I defince variable called question and I put inside this variable the value (input from user)
    let question = document.getElementById('input').value;
    let randomNumber = Math.floor(Math.random() * 3);
    let filterType = null;

//let answer = object.filter((item) => item.input.includes(question));
    let answer = object.filter(function(item){
      //if(item.input === question){
      if(item.input.includes(question)){
        return true;
      }
    });

     if(answer.length > 0){

       if(document.getElementById('longest').checked){
         let longest = answer[0].output.sort((a,b) => b.length - a.length);
         document.getElementById('output').textContent = longest[0] + '\n' + document.getElementById('output').textContent;
         console.log(longest[0]);
       }else if(document.getElementById('shortest').checked){
         let shortest = answer[0].output.sort((a,b) => a.length - b.length);
         document.getElementById('output').textContent = shortest[0] + '\n' + document.getElementById('output').textContent;
         console.log(shortest[0]);
       }else if(document.getElementById('random').checked){
          document.getElementById('output').textContent = answer[0].output[randomNumber] + '\n' + document.getElementById('output').textContent;
       }
     }else{
       document.getElementById('output').textContent = "I don't understand that command. Please enter another";
     }
   }

  document.querySelector('button').addEventListener("click", reply);
