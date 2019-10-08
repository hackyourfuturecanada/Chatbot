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
];

let textArea = document.getElementById("output");
document.getElementById('submit').addEventListener('click', function() {

  const question = document.getElementById('input').value.toLowerCase();
  const randomNumber = Math.floor(Math.random() * 3);
  const filterType = [];
  const returnIf = inOut.filter(item =>item.myInput == question)[0].myOutput;
  const returnRandom = item => returnIf[randomNumber];
  const short = item => returnIf[0];
  const long= item => returnIf[1];

  if (document.getElementById('shortest').checked) {
        textArea.innerHTML=short();

 } else if  (document.getElementById('longest').checked) {
        textArea.innerHTML=long();
}  else if (document.getElementById('random').checked) {
        textArea.innerHTML=returnRandom();
} else {
  document.getElementById('output').value =
   "I don't understand that command."
  //textArea.innerHTML ="I don't understand that command."
  };


});
