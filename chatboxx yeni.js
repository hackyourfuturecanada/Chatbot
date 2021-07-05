//In your JavaScript code, declare a variable and initialize it as an object.

const inOut = [{
  myInput: "what's your favorite food?",
  myOutput:["Pizza", "My favorite food is Pizza", "I don't have one"]},
  {
  myInput:"how are you",
  myOutput:["Fine","I'm doing Great", "Great"]},
  {
  myInput: "what's your favorite color",
  myOutput:["Pink","Pink is my favorite color", "I like pink"]}

  {
    myInput:"show me a dog",
    myOutput:dogPic }
  {
    myInput:"alert me",
    myOutput: delayedAlert }
  {
    myInput:"show me the weather",
    myOutpu: getWeather
  }
];

let textArea = document.getElementById("output");
document.getElementById('submit').addEventListener('click', function() {

  const question = document.getElementById('input').value.toLowerCase();
  const randomNumber = Math.floor(Math.random() * 3);
  const filterType = null;



  function returnIf(){
    if(item.myInput === question){
      return item.myOutput;
    }

  const returnRandom = item => returnIf[randomNumber];
  const short = myOutput[0].myOutput.sort((a, b) => a.length - b.length );
  const long= myOutput[0].myOutput.sort((a, b) => b.length - a.length );

  if (returnIf.length > 0 ) {

    if (document.getElementById('shortest').checked) {
        textArea.innerHTML = short();

 } else if  (document.getElementById('longest').checked) {
        textArea.innerHTML = long();
}  else if (document.getElementById('random').checked) {
        textArea.innerHTML = returnRandom();
}  else if (question == "alert me"){
        delayedAlert();
} else if (question == "show me a dog") {

        dogPic();
} else if (question == "show me the weather"){
        getWeather();
}else if {
document.getElementById('output').value =  "I don't understand that command."
  };


}});

function delayedAlert(){
  setTimeout(function(){
    alert(“Did you forget about me? It’s your friend, the Alarm!”);
  },300);
  }
}

var dogPic = new XMLHttpRequest();
dogPic.onreadystatechange = function() {
   if (dogPic.readyState == XMLHttpRequest.DONE) {
        let pic = JSON.parse(dogPic.responseText);
        console.log(pic);
        document.getElementById('title').setAttribute('src' pic.message)

   }
}
dogPic.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
dogPic.send();


function showWeather(){
 city= 'Toronto';
        api ='87f13ee1b6e2ec1dfd2751e046849da2';
        getWeather(const data = "data";
        .then(response => {
            pushContent(questionValue,`Toronto weather today is ${get.weather[0].description}');
        })
        .catch(err=>console.log(err));
        const info = "data";
      };

async function getWeather(site){
   let get = await fetch(site);
   let info = await get.json();
   return info;
