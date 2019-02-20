var requestURL = "../json/creatures.json";
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var data;

request.onload = function() {
    Data = request.response;

    var select = document.getElementById("userSelect");

    for (var index = 0; index < Data.creatures.length; index++) {
        var option = document.createElement("option");
        option.text = Data.creatures[index].type;
        option.value = index;
        select.add(option);
    }

    select.selectedIndex = -1;
}

function updateTable() {
    var table = document.getElementById("information");
    var select = document.getElementById("userSelect");

    var creatureData = Data.creatures[select.value];

    table.innerHTML = 
    '<tr>' +
        '<th>' + creatureData.type + '</th>' +
    '</tr>' +
    '<tr>' + 
        '<th>Emotions</th>' +
        '<th>Sounds</th>' +
        '<th>Legs</th>' +
        '<th>Rating</th>' +
    '</tr>' +
    '<tr>' +
        '<td>' +
            '<ul>';

    // add list of emotions
    creatureData.emotions.forEach(function(element) {
        table.innerHTML += '<li>'+ element + '</li>';
    });

    table.innerHTML += 
            '</ul>' +
        '</td>' + 
        '<td>' +
            '<ul>';

    // add list of sounds
    creatureData.sounds.forEach(function(element) {
        table.innerHTML += '<li>'+ element + '</li>';
    });

    table.innerHTML += 
            '</ul>' +
        '</td>' + 
        '<td>';

    // add the legs
    table.innerHTML += 
            creatureData.legs + 
        '</td>' +
        '<td>';

    // add the rating
    table.innerHTML += 
            creatureData.rating + 
        '</td>' +
    '</tr>';

    table.classList.remove("hide");
}