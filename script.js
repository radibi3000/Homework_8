var i = 0;
var text = 'UX Research and Product Management';
var speed = 150;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("UX").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}





function thankYou() {
    document.getElementById("thankYou").innerHTML = "Thank you, your email has been submitted! Excited to connect!";
}