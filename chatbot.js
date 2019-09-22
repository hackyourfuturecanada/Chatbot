


let bot = [
    { input: "Hello",
        output:["Good morning" ,"Good evnning","Hello, how are you?"] },
    { input: "what is your name",
        output: ["not sure" ,"nothing","chatbot"]  },
    { input: "How old are you",
        output:["0" ,"very old","not sure"] },
    
    ]
    
/*Your reply function will now have the following:
Declare a variable called ‘question’ and assign to it the value of the HTML <input> 
element. HINT: you should already have this done from last week.*/
let outputDom = document.getElementById("output");
 
function reply() {
    var question = document.getElementById("input").value;
    let randomNumber =  Math.floor(Math.random()*3);
    let filterType = null;
    
    filterType =  bot.filter( item =>
        item.input == question
        );

        if(filterType.length > 0){
            let asnwers = filterType[0].output;
            if(document.getElementById("shortest").checked==true){
               outputDom.innerHTML = asnwers.sort()[0];

            }else if (document.getElementById("longest").checked==true){
                outputDom.innerHTML = asnwers.sort()[asnwers.length-1];

                    console.log("longest answer");
            }else{
                outputDom.innerHTML = asnwers[randomNumber];
                    console.log("random answer");

            }
        }
    
         

     else {
        document.getElementById('output').innerHTML = "I don't understand that command";

    }
}


document.getElementById("submit").addEventListener('click', reply);

    