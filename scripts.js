firstText = "Developer";
secondText = "Designer";
thirdText = "Coder"
intervalTime = 600;
window.load = displayText();
function displayText() {
    // display first text
    document.querySelector('#switchingtext').innerText = firstText;
    // display second text
    setTimeout(() => {
        document.querySelector('#switchingtext').innerText = secondText;
    }, intervalTime * 3);
    // display third text
    setTimeout(() => {
        document.querySelector('#switchingtext').innerText = thirdText;
    }, intervalTime * 5);
}

setInterval(() => {
    displayText();
}, intervalTime * 7);