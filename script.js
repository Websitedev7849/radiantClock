


function time() {
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');

    if (new Date().getHours() > 12 ) {
        h.innerHTML = new Date().getHours() - 12;
    } else {
        h.innerHTML = new Date().getHours();
    }
    m.innerHTML = new Date().getMinutes();
    s.innerHTML = new Date().getSeconds();
}

setInterval(time , 1000);