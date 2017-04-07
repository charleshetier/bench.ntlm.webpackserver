const interval = 1000;

let reqi = 0;
let i = 0;

const url = '/api/Home/action1?update=' + new Date().getSeconds();
console.log(url);
httpGetAsync(url, handler);

// ******  A commenter puis décommenter avec webpack-sev-server ********
//httpGetAsync('api/Home/action1?toto=boom', handler);

function handler(body) {
    console.log(body);
    if (++i >= reqi) {
        setTimeout(function () {
            location.reload(true);
        }, interval);
    }
}

function httpGetAsync(url, callback) {
    httpRequestAsync(url, "GET", callback);
}

function httpPostAsync(url, callback) {
    httpRequestAsync(url, "POST", callback);
}

function httpRequestAsync(url, verb, callback) {
    reqi++;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }

    xmlHttp.open(verb, url, true); // true for asynchronous 
    xmlHttp.send(null);
}