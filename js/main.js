// element declarations
var hourHand = document.getElementById("hour"),
    minuteHand = document.getElementById("minute"),
    secondHand = document.getElementById("second"),

    dateBox = document.getElementById("date-readout"),
    bg = document.getElementById("backdrop");

var clockAnimation,
    cancelAnimation;

// update function
function updateClock() {
    var time = new Date();

    // get times
    var hour = time.getHours() + time.getMinutes() / 60;
    var minute = time.getMinutes() + time.getSeconds() / 60;
    var second = time.getSeconds() + time.getMilliseconds() / 1000;

    // get date
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getYear();

    var dateString = ""; // something

    // render stuff
    applyAngle(hourHand, getAngle(hour, 12));
    applyAngle(minuteHand, getAngle(minute, 60));
    applyAngle(secondHand, getAngle(second, 60));
    dateBox.innerText = moment(time).format("MMM DD[,] YYYY");

    // draw gradient map occasionally; maybe like every minute
    // TODO

    // rAF is bae
    clockAnimatio = requestAnimationFrame(updateClock);

    // for debugging
    if (cancelAnimation) {
        cancelAnimationFrame(clockAnimation);
        clockAnimation = undefined;
    }
}

function applyAngle(el, angleString) {
    if (el.style.transform !== undefined) {
        el.style.transform = `rotate(${angleString})`;
    } else if (el.style.webkitTransform !== undefined) {
        el.style.webkitTransform = `rotate(${angleString})`;
    } else {
        alert("Please use a browser that supports CSS transforms for the best experience");
    }
}

function getAngle(time, whole) {
    return (360 * time / whole + 180).toString() + "deg";
}

function gradientMap(percent) {
    return "linear-gradient"; // some CSS thing
}

// we're using requestAnimationFrame because 60fps is sexy af
clockAnimation = requestAnimationFrame(updateClock);

