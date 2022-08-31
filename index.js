let homeButtons = document.getElementById("home-button");
let guestButtons = document.getElementById("guest-button");

let homeCount = 0;
let guestCount = 0;

function add1GoalAtHome () {
    homeCount += 1;
    homeButtons.textContent = homeCount;
}

function add2GoalsAtHome () {
    homeCount += 2;
    homeButtons.textContent = homeCount;
}

function add3GoalsAtHome () {
    homeCount += 3;
    homeButtons.textContent = homeCount;
}

function add1GoalToGuest () {
    guestCount += 1;
    guestButtons.textContent = guestCount; 
}

function add2GoalsToGuest () {
    guestCount += 2;
    guestButtons.textContent = guestCount;
}

function add3GoalsToGuest () {
    guestCount += 3;
    guestButtons.textContent = guestCount;
}