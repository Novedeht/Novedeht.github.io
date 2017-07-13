"use strict";

function nasaimage(callback) {
    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
    }
    httpGetAsync('https://images-api.nasa.gov/search?q=nebula&media_type=image', function (link) {
        var data = JSON.parse(link)
        var number = Math.floor(Math.random() * data.collection.items.length);
        callback(data.collection.items[number].links[0].href);
    })
}