var input = document.getElementById('search-input');

$( document ).ready(function() {

  // Search Button Click Ajax Call

  $('#search-button').click(function searchWord() {
    const searchButton = document.getElementById('search-button');
    var inputValue = document.getElementById('search-input');
    var value = inputValue.value;
    console.log(value)

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://wordsapiv1.p.rapidapi.com/words/" + value + "/definitions",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "f9e00ad0b5msh6a8c9fd337bf3e0p11e193jsn21f3a1d12552"
        }
    }
    
    $.ajax(settings).then(function (response) {
        console.log(response);
        $(".word").text(JSON.stringify(response.word).replaceAll("\"", ""));
        console.log(response.word);
        $(".definition").text(JSON.stringify(response.definitions[0].definition).replaceAll("\"", ""));
    });

  });

  // Search Button Enter Button Ajax Call

  input.addEventListener("keyup", function(event){

    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById('search-button').click();
      const searchButton = document.querySelector('search-button');
      var inputValue = document.getElementById('search-input');
      var value = inputValue.value;
      console.log(value)
  
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://wordsapiv1.p.rapidapi.com/words/" + value + "/definitions",
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
              "x-rapidapi-key": "f9e00ad0b5msh6a8c9fd337bf3e0p11e193jsn21f3a1d12552"
          }
      }
      
      $.ajax(settings).then(function (response) {
          console.log(response);
          $(".word").text(JSON.stringify(response.word).replaceAll("\"", ""));
          console.log(response.word);
          $(".definition").text(JSON.stringify(response.definitions[0].definition).replaceAll("\"", ""));
      });
  
    }
    
  });
  
});