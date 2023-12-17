let motivateText = [
    "you can do it",
    "keep it up",
    "you are about to get the answer",
    "take a deep breath",
    "you are almost there",
    "keep going",
    "don't stop you are almost there",
    "you never fail until you stop trying",
    "you got this",
    "you are stronger than you think"
];
let current = 0;
let attemptValue = 0

let randomNum = Math.trunc(
    Math.random() * 101
)

// console.log(randomNum);

// // let randomNum = 1;

// console.log(randomNum)


const screen = document.getElementById('screen-text');
const submit = document.querySelector('.submit');
const motivate = document.querySelector('.motivate-text');
const error = document.querySelector('.error');
const hintText = document.querySelector('.hints')
const hint = document.querySelector('.hint-btn')
const modal = document.querySelector('.modal');
const attempt = document.querySelector(".attempt")


submit.addEventListener('click', (e) => {
    e.preventDefault();
    let screenValue = screen.value;
    screen.value = ""


    if (current > motivateText.length -2) {
        current = 0;
    } else {
        current++
    }

    // console.log(current)
    motivate.textContent = motivateText[current];
    error.innerHTML = "You chose " + screenValue + ", you are wrong";


    if (screenValue == randomNum) {
        console.log("yes");
        error.innerHTML = "You chose " + screenValue + " you are correct";
        error.classList.add("green")
    }  
     
    if(screenValue > randomNum) {
        hintText.innerHTML = "What you chose is too big"
        // console.log("big");
    } else {
        hintText.innerHTML = "What you chose is too small"
        // console.log("small");
    }

    if (screenValue == randomNum) {
        setTimeout(() => {
            modal.classList.add('show')
        },1000)
    }

    attempt.textContent = attemptValue++


});

hint.addEventListener('click', (e) => {
    hintText.classList.toggle('block')
})

const restart = document.querySelector('.restart');

restart.addEventListener('click', (e) => {
    e.preventDefault()

    location.reload()
})