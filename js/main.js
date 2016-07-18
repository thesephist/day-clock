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

}

function getAngle(time, whole) {
    return (360 * time / whole).toString() + "deg";
}

function gradientMap(percent) {
    return "linear-gradient"; // some CSS thing
}
