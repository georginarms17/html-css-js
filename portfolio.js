document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting me!");
    this.reset();
});

function changeBackground() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("projects").style.backgroundColor = randomColor;
}