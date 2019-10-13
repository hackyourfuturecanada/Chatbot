var chat = new XMLHttpRequest();
chat.onreadystatechange = function() {
   if (chat.readyState == XMLHttpRequest.DONE) {

      let data = JSON.parse(chat.responseText);
      console.log(data);


  chat.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
  chat.send();
