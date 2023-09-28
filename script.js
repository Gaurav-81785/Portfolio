function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const jumpButton = document.getElementById("jumpButton");
const targetSection = document.getElementById("contact");
jumpButton.addEventListener("click", function () {
    targetSection.scrollIntoView({ behavior: "smooth" });
});


let text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 7.47}deg)">${char}</span>`).join("");
