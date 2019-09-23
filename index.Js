
//here we are going to define and declare object and inside the object I define two arrays
const object = [
  {
    input: "Hello",
    output: ["Hi","Hey","Greeting"],
  },
  {
    input: "what is your favourite colour ?",
    output: ["I am not sure","There are too many to chose from","I like everyone"],
  },
  {
    input: "How are you ?",
    output: ["Fine","not so good","great"],
  },
];

      

//here we define function called reply and this function will let the chatpot to give me the proper anwers based on the input the we give
  function reply(){
    //I defince variable called question and I put inside this variable the value (input from user)
   let question = document.getElementById('input').value;
    let randomNumber = Math.floor(Math.random() * 3);
    let filterType = null;
    let answer = object.filter(function(name){
      return name.input == "Hello"
    })
    console.log(answer);

    //I used if statement to check the input and give the outpot
    //if(object.input.includes(question)){
     if(answer.length> 0){

       if(document.getElementById('longest').checked){
         let longest = object.filter(long =>long.input.length >3);
         document.getElementById('output').textContent =


       }
       else if(document.getElementById('shortest').checked){

       }
       else if(document.getElementById('random').checked){

       }
     }
      //here we define variable called i, inside this variable i checked the index of the input based on the location in array
     let i= object.input.indexOf(question);
     //last step is to give the output location based on the input location in the array
     document.getElementById('output').textContent = object.output[i];

    }
    else{
      document.getElementById('output').textContent = "I don't understand that command. Please enter another";

    }
  }
  //finally i used eventlessenors to activate the click button in chatBot

  document.querySelector('button').addEventListener("click", reply);

*/
