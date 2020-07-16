  // Select All From MySQL Database

$( document ).ready(function() {

  $('#card1').click(function searchWord() {

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:9000/mywords",
        "method": "GET",
    }
    
    $.ajax(settings).then(function (response) {
        console.log(response);
        $(".word").text(JSON.stringify(response.words).replaceAll("\"", ""));
        // console.log(response.word);
        // $(".definition").text(JSON.stringify(response.definitions[0].definition).replaceAll("\"", ""));
    });
    
  });

});