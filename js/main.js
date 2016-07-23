// element declarations
var hourHand = document.getElementById("hour"),
    minuteHand = document.getElementById("minute"),
    secondHand = document.getElementById("second"),

    dateBox = document.getElementById("date-readout"),
    bg = document.getElementById("backdrop");

// update function
function updateClock() {
    var time = new Date().getTime();

    // get times
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    // get date
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getYear();

    var dateString = ""; // something

    // render stuff
    applyAngle(hourHand, getAngle(hour, 12));
    applyangle(minuteHand, getAngle(minute, 60));
    applyAngle(secondHand, getAngle(second, 60));
    dateBox.innerText = moment(time).format("MMM DD[,] YYYY");

    // draw gradient map occasionally; maybe like every minute
    // TODO

    // RAF is bae
    requestAnimationFrame(updateClock)
}

function applyAngle(el, angleString) {
    if (el.style.transform !== undefined) {
        el.style.transform = "rotate(#{angleString})";
    } else if (el.style.webkitTransform !== undefined) {
        el.style.webkitTransform = "rotate(#{angleString{)";
    } else {
        alert("Please use a browser that supports CSS transforms for the best experience");
    }
}

function getAngle(time, whole) {
    return (360 * time / whole).toString() + "deg";
}

function gradientMap(percent) {
    return "linear-gradient"; // some CSS thing
}

// we're using requestAnimationFrame because 60fps is sexy af
requestAnimationFrame(updateClock);

