"use strict";

function nasaimage(search, callback) {
    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true);
        xmlHttp.send(null);
    }
    if (typeof search == 'function') {
        console.log('super fuck u')
        httpGetAsync('https://images-api.nasa.gov/search?media_type=image', function (link) {
            var data = JSON.parse(link)
            var number = Math.floor(Math.random() * data.collection.items.length);
            callback(data.collection.items[number].links[0].href);
        })
    } else {
        httpGetAsync('https://images-api.nasa.gov/search?q=' + search + '&media_type=image', function (link) {
            var data = JSON.parse(link)
            var number = Math.floor(Math.random() * data.collection.items.length);
            console.log('fuck u')
            if (data.collection.items.length == 0) {
                return;
            }
            callback(data.collection.items[number].links[0].href);
        })
    }
}

/*
nasaimage('earth', function (link) {
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(' + link + ')';
})
*/