function check(callback) {
    $('#result').empty();
    // console.log("hello")
    var xmlHttpRequest = new XMLHttpRequest()
    xmlHttpRequest.open("GET", " http://fake-hotel-api.herokuapp.com/api/hotels", true);
    xmlHttpRequest.responseType = 'json';

    xmlHttpRequest.onload = function () {
        if (xmlHttpRequest.status >= 200 && xmlHttpRequest.status < 400) {
            const hotel = xmlHttpRequest.response;
            var keys = Object.keys(hotel);
            count = 5
            for (var i = 0; i < 5; i++) {
                var k = keys[i];
                var name = hotel[k].name;
                // console.log(name)
                printData(name,count);
                count = count-1;
            }
        } else {
            alert("error")
        }

    }
    xmlHttpRequest.send()
}

function printData(name,count) {

    console.log(name)
    var table = document.getElementById("result");
    var row = table.insertRow(0);
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    cell0.innerHTML = count + ".";
    cell1.innerHTML = name.toUpperCase();
    cell2.innerHTML = `<button onClick=check_review('${name}')>Check review</button>`;

}


function check_review(name){
    console.log("checking review of ",name);
}