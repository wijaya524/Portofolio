//Scroll animation//

const div = document.querySelectorAll("div")

window.addEventListener("scroll", () => {
    div.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 300;
        let height = sec.offsetHeight;

        if (top >= offset  && top < + offset + height) {
            sec.classList.add("show-animation");
        } else {            
            sec.classList.remove("show-animation");
        }
    })
});

//NAVBAR//

const check = document.querySelector("#checkbox1");
const ul = document.querySelector("#ul");

       check.addEventListener("click", () => {
         ul.classList.toggle("hidden");
       })