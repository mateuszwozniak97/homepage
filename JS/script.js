let button = document.querySelector(".button");
let body = document.querySelector(".body");
let colorName = document.querySelector(".button__colorName")
button.addEventListener("click", () => {
    body.classList.toggle("dark");

    colorName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
}); 
console.log("Witam serdecznie")