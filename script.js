const continueNameBtn = document.querySelector(".continue-one");
const continueCardBtn = document.querySelector(".continue-two");
const userName = document.querySelector(".username");
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const screenThree = document.querySelector(".screen3");
const screenFour = document.querySelector(".screen4");
const backScreenOne = document.querySelector(".back-s1");
const backScreenTwo = document.querySelector(".back-s2");
const backScreenThree = document.querySelector(".back-s3");
const backScreenFour = document.querySelector(".back-s4");
const cardText = document.querySelector(".dynamic-card-text");
const cardNumber = document.querySelector(".cardnumber");
const proceed = document.querySelector(".proceed");

continueNameBtn.addEventListener("click", function () {
    console.log(userName.value);
    screenOne.classList.add("d-none");
    screenTwo.classList.remove("d-none");
});

continueCardBtn.addEventListener("click", function () {
    screenOne.classList.add("d-none");
    screenTwo.classList.add("d-none");
    screenThree.classList.remove("d-none");
});

backScreenTwo.addEventListener("click", function () {
    screenOne.classList.remove("d-none");
    screenTwo.classList.add("d-none");
    screenFour.classList.add("d-none");
});

backScreenThree.addEventListener("click", function () {
    screenOne.classList.add("d-none");
    screenTwo.classList.remove("d-none");
    screenThree.classList.add("d-none");
    screenFour.classList.add("d-none");
});
backScreenFour.addEventListener("click", function () {
    screenOne.classList.add("d-none");
    screenTwo.classList.add("d-none");
    screenThree.classList.remove("d-none");
    screenFour.classList.add("d-none");
});
proceed.addEventListener("click", function () {
    screenOne.classList.add("d-none");
    screenTwo.classList.add("d-none");
    screenThree.classList.add("d-none");
    screenFour.classList.remove("d-none");
});

cardNumber.addEventListener("keyup", function () {
    //   console.log(cardNumber.value);
    cardText.textContent = `${cardNumber.value}`;
});
