// element declarations
var hourHand = document.getElementById("hour"),
    minuteHand = document.getElementById("minute"),
    secondHand = document.getElementById("second"),

    dateBox = document.getElementById("date-readout"),
    bg = document.getElementById("backdrop");

var clockAnimation,
    cancelAnimation;

var timeToColor = {
    "H0": "#ffffff",
    "H3": "#ffffff",
    "H6": "#ffffff",
    "H9": "#ffffff",
    "H12": "#ffffff",
    "H15": "#ffffff",
    "H18": "#ffffff",
    "H21": "#ffffff"
};

// update function
function updateClock() {
    var time = new Date();

    // get times
    var second = time.getSeconds() + time.getMilliseconds() / 1000;
    var minute = time.getMinutes() + second / 60;
    var hour = time.getHours() + minute / 60;
 
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

    // draw gradient map
    bg.style.background = gradientMap(hour);

    // for debugging
    if (cancelAnimation) {
        cancelAnimationFrame(clockAnimation);
        clockAnimation = undefined;
    } else {
        // rAF is bae
        clockAnimation = requestAnimationFrame(updateClock);
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

function gradientMap(hour) {
    var truncHour = hour - hour % 3;
    var colors = [hour - 3, hour, hour + 3].map(function(h) {
        return timeToColor["H" + h.toString()];
    });

    return "linear-gradient(to top, ${colors[0]}, 50% ${colors[1]}, ${colors[2]})"; // some CSS thing
}

// we're using requestAnimationFrame because 60fps is sexy af
clockAnimation = requestAnimationFrame(updateClock);

