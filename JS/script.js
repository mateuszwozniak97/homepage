{
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const colorName = document.querySelector(".button__colorName");
        body.classList.toggle("dark");
        colorName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };
    const welcome = () => {
        console.log("Witam serdecznie");
    };
    
    const init = () => {
        const changeBeckgroundClick = document.querySelector(".button"); 
        changeBeckgroundClick.addEventListener("click", toggleBackground);

        welcome();
    };
    init();
};