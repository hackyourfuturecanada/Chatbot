const chatBotObject = [
    {input:"Hello",
    output:["Hello", "Hey", "Greetings"]},
    {input:"What is your favorite color",
    output:["I am not sure","There are too many to choose from","I like everyone"]},
    {input:"How are you?",
    output:["Fine", "Great","Not so good"]}
  ];



function reply() {
    let question = document.getElementById("input").value.toLowerCase()
    let randomNumber = Math.floor(Math.random()*3)
    let filterType = null
    var filteredOutput = chatBotObject.filter(item => item.input === question)
    const sortedOutput = filteredOutput[0]["output"].sort(function(a, b){
        return b.length - a.length});
    if (sortedOutput.length>0){
        if(document.getElementById("longest").checked) {
            document.getElementById("output").value = sortedOutput[0]
        } else if (document.getElementById("shortest").checked){
            document.getElementById("output").value = sortedOutput[1]
        } else {
            document.getElementById("output").value = sortedOutput[randomNumber]
        }
    
    } else {
        document.getElementById("output").value = "I don't understand that command. Please enter another."
    }
    
}

window.onload = function () {
    document.getElementById("submit").addEventListener("click", function() {
        
        reply()
    })
};



