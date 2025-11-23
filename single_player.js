const okay_button = document.querySelector("#message_ok");
const message_container = document.querySelector(".message_container");
const game_section = document.querySelector(".game_section");

okay_button.addEventListener('click', () => {
    message_container.classList.add("invisible");
    game_section.classList.remove("invisible2");
})

const hamburg = document.querySelector("#hamburg");
const tdot_show = document.querySelector(".tdot_show");


hamburg.addEventListener("click",()=>{
    tdot_show.classList.toggle("tdot_hide");
})

const stone_button = document.querySelector("#stone_button")
const paper_button = document.querySelector("#paper_button")
const scissor_button = document.querySelector("#scissor_button")

let game_count_span = document.querySelector("#game_count");
let user_won_span = document.querySelector("#user_score");
let cpu_won_span = document.querySelector("#bot_score");

let user_result = document.querySelector("#user_result");
let bot_result = document.querySelector("#bot_result");

let winner = document.querySelector("#winner");

const box1 = document.querySelector("#box1");
let userf_result = document.querySelector("#userf_result");
let botf_result = document.querySelector("#botf_result");
const final_winner = document.querySelector("#final_winner");

let choice = ["Stone", "Paper", "Scissor"];
let match_count = 0;
let user_won = 0;
let cpu_won = 0;


function match(user_choice) {
    const cpu_choice = Math.floor(Math.random() * (3 - 0)) + 0;
    match_count++;
    bot_result.innerText = choice[cpu_choice];
    if (user_choice == cpu_choice) {
        cpu_won++;
        user_won++;
        winner.innerText = "Match Tied";
        return;
    }
    if (user_choice === 0 && cpu_choice === 2 || user_choice === 1 && cpu_choice === 0 || user_choice === 2 && cpu_choice === 1) {
        user_won++;
        winner.innerText = "You won";
        return;
    } else {
        cpu_won++;
        winner.innerText = "Bot won";
        return;
    }
}

function update_content(user_choice) {
    game_count_span.innerText = match_count;
    user_won_span.innerText = user_won;
    cpu_won_span.innerText = cpu_won;
    user_result.innerText = choice[user_choice];
}

function check_count() {
    if (match_count === 10) {
        if (user_won == cpu_won) {
            final_winner.innerText = `Game Draw`;
            userf_result.innerText = user_won;
            botf_result.innerText = cpu_won;
            resMes();
        } else if (user_won < cpu_won) {
            final_winner.innerText = `You loose\n Try again!`;
            userf_result.innerText = user_won;
            botf_result.innerText = cpu_won;
            resMes();
        }
        else {
            final_winner.innerText = `You win The game!\n Congrats`;
            userf_result.innerText = user_won;
            botf_result.innerText = cpu_won;
            resMes();
        }
        match_count = 0;
        user_won = 0;
        cpu_won = 0;
        update_content();
        return 1;
    }
}

const stone_image = document.querySelector("#stone_image");
const paper_image = document.querySelector("#paper_image");
const scissor_image = document.querySelector("#scissor_image");

stone_image.addEventListener("click", () => {
    const user_choice = 0;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

paper_image.addEventListener("click", () => {
    const user_choice = 1;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

scissor_image.addEventListener("click", () => {
    const user_choice = 2;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

stone_button.addEventListener("click", () => {
    const user_choice = 0;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

paper_button.addEventListener("click", () => {
    const user_choice = 1;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

scissor_button.addEventListener("click", () => {
    const user_choice = 2;
    match(user_choice);
    update_content(user_choice);
    showMessage();
    if (check_count()) {
        return;
    }
})

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

