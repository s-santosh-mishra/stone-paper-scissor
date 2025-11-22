const okay_button = document.querySelector("#message_ok");
const message_container = document.querySelector(".message_container");
const game_section = document.querySelector(".game_section");

console.log(okay_button)

okay_button.addEventListener('click', () => {
    message_container.classList.add("invisible");
    game_section.classList.remove("invisible2");
})

const hamburg = document.querySelector("#hamburg");
const tdot_show = document.querySelector(".tdot_show");


hamburg.addEventListener("click",()=>{
    tdot_show.classList.toggle("tdot_hide");
})