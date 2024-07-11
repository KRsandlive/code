const now = new Date();
const hours_origin = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

var hours;
    if (hours_origin <= 12) {
       hours = (`오전 ${hours_origin}`);
    }
       hours = (`오후 ${hours_origin - 12}`);
function time_write() {string(document.writeln(`${hours}시 ${minutes}분 ${seconds}초`))}
