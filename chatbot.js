let bot = [
    { 
        input:  ["hello!", "how are you?", "how is the weather today?"], 
        output: ["Hi" ,"I am good","Fantastic?"] 
    },
    { 
        input:  ["what is your name?", "how old are you?", "What is your major?"],
        output: ["Riham", "very old", "astronaut"]  
    },
    {
        input:  ["where are you from?", "how many language do you speak?", "do you have pets?"],
        output: [" From a planet called the earth", "four ", "no"] 
    },

];
    


let outputDom = document.getElementById("output");
 
function reply() {
    let question = document.getElementById("input").value.toLowerCase();
    console.log(question)
    let randomNumber =  Math.floor(Math.random()*3);
    let filterType = null;

        filterType = bot.filter(element => 
        element.input.includes(question)
        );
    console.log(output);



    //filterType =  bot.filter( item =>
     //   item.input == question
       // );
   
        let asnwer = ""

        if(filterType.length > 0){
            let asnwers = filterType[0].output;
            if(document.getElementById("shortest").checked==true){
             asnwer = asnwers.sort()[0];

            


            }else if (document.getElementById("longest").checked==true){
                answer = asnwers.sort()[asnwers.length-1];
                   
            }else{
               answer = asnwers[randomNumber];
                   

            }
        }
          

     else { 
        //document.getElementById('output').innerHTML += `bot` + ` : ` + ``+ `I don't understand that command` + `\n` + `User` + ` : ` + `` + question;
            answer="I do not understand";
    }

         outputDom.innerHTML += `user: ${question}\nbot ${answer}\n`
}


document.getElementById("submit").addEventListener('click', reply);

    