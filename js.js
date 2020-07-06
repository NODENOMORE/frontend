$( document ).ready(function() {

    $('.search-button').click(function searchWord() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://wordsapiv1.p.rapidapi.com/words/hatchback/definitions",
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
});