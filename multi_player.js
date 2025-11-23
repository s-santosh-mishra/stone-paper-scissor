const okay_button = document.querySelector("#message_ok");
const message_container = document.querySelector(".message_container");
const game_section = document.querySelector(".game_section");
const mul_game_container = document.querySelector(".mul_game_container");

okay_button.addEventListener('click', () => {
    message_container.classList.add("invisible");
    game_section.classList.remove("invisible");
    mul_game_container.classList.remove("invisible")
})

const hamburg = document.querySelector("#hamburg");
const tdot_show = document.querySelector(".tdot_show");


hamburg.addEventListener("click", () => {
    tdot_show.classList.toggle("tdot_hide");
})

const vs_image = document.querySelector("#vs_image");

//logic for who won

const winner = document.querySelector("#winner");
const choice = ["Stone", "Paper", "Scissor"];
let match_count = 0;
let p1_won = 0;
let p2_won = 0;

function match(p1_choice, p2_choice) {
    match_count++;
    if (p1_choice == p2_choice) {
        winner.innerText = "Match Tied";
        return;
    }
    if (p1_choice === 0 && p2_choice === 2 || p1_choice === 1 && p2_choice === 0 || p1_choice === 2 && p2_choice === 1) {
        p1_won++;
        winner.innerText = "Player 1 won";
        return;
    } else {
        p2_won++;
        winner.innerText = "Player 2 won";
        return;
    }
}


//logic for the match
const p1_option = document.querySelector(".player1");
const p2_option = document.querySelector(".player2");

let p1_choice = null;
let p2_choice = null;

function get_choice_p1(callback) {
    let image_options = document.querySelectorAll(".p1_options");
    image_options.forEach(img => {
        img.addEventListener("click", function () { 
            let num = Number(this.dataset.no);      
            callback(num);                           
        });
    });
}

function get_choice_p2(callback) {
    let image_options = document.querySelectorAll(".p2_options");
    image_options.forEach(img => {
        img.addEventListener("click", function () { 
            let num = Number(this.dataset.no);      
            callback(num);                           
        });
    });
}

//click happens 
document.querySelectorAll(".p1_options").forEach(img => {
    img.addEventListener("click", function () {
        p1_choice = Number(this.dataset.no);
        p1_option.classList.add("invi");
        p2_option.classList.remove("invi");
    });
});


document.querySelectorAll(".p2_options").forEach(img => {
    img.addEventListener("click", function () {
        p2_choice = Number(this.dataset.no);
        p1_option.classList.remove("invi");
        p2_option.classList.remove("invi");
    });
});

//match starts
vs_image.addEventListener("click", () => {
    if (p1_choice === null || p2_choice === null) {
        winner.innerText = "Both players must choose!";
        return;
    }
    match(p1_choice, p2_choice);
});

//logic for result dispaly
let messageTimeout;

function showMessage() {
    box.style.display = "block";
    game_sec.style.display = "none";

    messageTimeout = setTimeout(() => {
        game_sec.style.display = "flex";
        box.style.display = "none";
    }, 4000);
}

function resMes() {
    box1.style.display = "block";
    game_sec.style.display = "none";
    box.style.display = "none";
    setTimeout(() => {
        game_sec.style.display = "flex";
        box1.style.display = "none";
    }, 4000);
}

const remove_early = document.querySelector("#message1_ok");

remove_early.addEventListener("click", () => {
    clearTimeout(messageTimeout);
    game_sec.style.display = "flex";
    box.style.display = "none";
});