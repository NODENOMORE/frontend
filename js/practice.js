  // Select All From MySQL Database

$( document ).ready(function() {

  $('#card1').click(function searchWord() {

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://fathomless-brushlands-12746.herokuapp.com/mywords",
      "method": "GET",
    }

    $.ajax(settings).then(function (response) {

      console.log(response);

      // // $(".category").text(JSON.stringify(response.words[0].category).replaceAll("\"", ""));

      // for (const property in response) {
      // console.log(`${property}: ${object[property]}`);
      // }
      // // $(".definition").text(JSON.stringify(response.definitions[0].definition).replaceAll("\"", ""));
      // // Looping through each result item

      for (var i = 0; i <= response._word.length; i++) {

        console.log(i)
        var category = response._word[i].category;
        $("#category"+[i]).html(category);

      }

    });

  });

});
