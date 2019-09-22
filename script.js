const ioChatbot = [ {
    input : "hello",
    output : ["Hello", "Hi", "Greetings"]
 },
 {
    input : "What is your favorite color?",
    output : ["i am not sure", "There are too many", "i like everyone",]
 },
 {
    input : "How are you",
    output : ["fine", "great", "not so good"]
 }

]



console.log(ioChatbot);

function reply() {

    let question = document.getElementById("input").value.tolowerCase();

    let randomNumber = Math.floor (Math.random()*3)

    let be = document.getElementById("output").value

    let filterType = null

    let response = ioChatbot.filter(item => {return item.input === question } )

    if (response.length>1){

     if (document.getElementById("longest").checked == true ){

             be= response[0].output[2];
    
        } else if (document.getElementById("shortest").checked == true ){

            be = response[0].output[0];

        } else {

            be = response[0].output[randomNumber];
    }


    }else {

            be = "i do not understand that comment. Please enter another!"

        }
   
    




}

//document.getElementById("submit").addEventListener("click",function() {reply()});

document.querySelector("#submit").addEventListener("click", function(){
    reply();
 });