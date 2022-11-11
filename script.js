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
const moneyInput = document.querySelector(".money-input");

continueNameBtn.addEventListener("click", function () {
  if (userName.value == "") {
    // userName.style.border = "#de7171 solid 3px ";
    userName.classList.add("wrong");
    // alert("enter something");
  } else {
    screenOne.classList.add("d-none");
    screenTwo.classList.remove("d-none");
    sessionStorage.setItem("uname", `${userName.value}`);
    const uname = sessionStorage.getItem("uname");
    document.querySelector(".confirm-name").textContent = `${uname}`;
    userName.classList.remove("wrong");
  }
});

continueCardBtn.addEventListener("click", function () {
  if (cardNumber.value == "") {
    cardNumber.classList.add("wrong");
  } else {
    screenOne.classList.add("d-none");
    screenTwo.classList.add("d-none");
    screenThree.classList.remove("d-none");
    sessionStorage.setItem("cardnumber", `${cardNumber.value}`);
    const cardnumber = sessionStorage.getItem("cardnumber");
    document.querySelector(".confirm-card").textContent = `${cardnumber}`;
    cardNumber.classList.remove("wrong");
  }
});

proceed.addEventListener("click", function () {
  if (moneyInput.value == "") {
    // userName.style.border = "#de7171 solid 3px ";
    moneyInput.classList.add("wrong");
    // alert("enter something");
  } else {
    screenOne.classList.add("d-none");
    screenTwo.classList.add("d-none");
    screenThree.classList.add("d-none");
    screenFour.classList.remove("d-none");
    sessionStorage.setItem("amount", `${moneyInput.value}`);
    const amount = sessionStorage.getItem("amount");
    document.querySelector(".confirm-amount").textContent = `${amount}`;
    moneyInput.classList.remove("wrong");
  }
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

// Typing input in dynamic card
cardNumber.addEventListener("keyup", function () {
  cardText.textContent = `${cardNumber.value}`;
});

//get values from sessionStorage and rediect to UPI apps
document.querySelector(".pay").addEventListener("click", function () {
  const finalLink = `upi://pay?pa=${sessionStorage.getItem(
    "cardnumber"
  )}@paytm&pn=${sessionStorage.getItem(
    "uname"
  )}&cu=INR&am=${sessionStorage.getItem("amount")}`;
  window.open(`${finalLink}`, "_self");
});
