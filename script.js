var i = 0;
var txt = 'UX Researcher and UX Engineer';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("UX").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function thankYou() {
    document.getElementById("thankYou").innerHTML = "Thank you, your email has been submitted!";
}