console.log("he");
// Input and output contents declared
const chatbotIO = [
    {
        input :  ['hello', 'hi', 'greetings'],
        output : ["Hello", "Hi", "Hey"]
    },
    {
        input  : ['what is your favourite colour?', 'who is your favourite HYF instructor?', 'who is your role model?'],
        output : ["I am not sure", "I like every color", "Orange"]
    },
    {
        input : ['how are you?', 'how is the weather today?', 'how is canada doing in the olympics?'],
        output : ["Great", "Cool", "Good"]
    }]

    // just check chatbot input output content on console 
    const list = chatbotIO.filter(io => {return io;});
    console.log(list);

    // random fuction, every time show rondom answer
    const random = (io) => { return io[0].output[Math.floor(Math.random()*3)];}
    // shortest function, every time show shortest answer
    const shortest = (io) =>{ return io[0].output.reduce((first, second) => first.length <= second.length ? first : second)}
    // longest function, every time show longest answer
    const longest = (io) =>{ return io[0].output.reduce((first, second) => first.length >= second.length ? first : second)}

    // comparison of two values(user input and our input) and call push content function
function reply(radioButton){
    const questionValue = document.querySelector("#input").value;
    // i checked that if array input value is equal to our input value 
    const filterIO = chatbotIO.filter(ios => { 
        console.log("ios", ios.input);
        return ios.input.includes(questionValue.toLowerCase()); 
    })
    console.log("filterIO",filterIO);
    // response minumum 1 object if input type is inside the array. After i call pushContent() function which button clicked.
    if(filterIO.length === 1){
            if(radioButton === "longest"){
                pushContent(questionValue,longest(filterIO)); 
            } else if(radioButton === "shortest"){
                pushContent(questionValue,shortest(filterIO)); 
            } else {
                pushContent(questionValue,random(filterIO));
            }
        }
    else {
        const undefinedContent = "I don't understand that command. Please enter another command.";
        pushContent(questionValue, undefinedContent);
        console.log(undefinedContent);
    }    
}

// Push and storage every content for user and chatbot.
function pushContent(questionValue, chatbotValue){
    const selectedOutput =  document.querySelector("#output");
    const storageOutput = [];
    storageOutput.push(`You: ${questionValue}`,`Chatbot: ${chatbotValue}`);
    for(let  i = 0; i < storageOutput.length; i++ ){
        selectedOutput.textContent += `${storageOutput[i]}\n`;
    }
}

// run reply function after click submit method and control which button clicked.
document.querySelector("#submit").addEventListener("click", function(){

    if(document.getElementById("longest").checked){
        console.log("longest");
        reply("longest");
    } else if(document.getElementById("shortest").checked){
        console.log("shortest");
        reply("shortest");
    } else{
        console.log("random");
        reply("random");
    }
    
})