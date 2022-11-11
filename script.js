const userName = document.querySelector(".username");
const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const screenThree = document.querySelector(".screen3");
const screenFour = document.querySelector(".screen4");
const backScreenTwo = document.querySelector(".back-s2");
const backScreenThree = document.querySelector(".back-s3");
const backScreenFour = document.querySelector(".back-s4");
const cardText = document.querySelector(".dynamic-card-text");
const cardNumber = document.querySelector(".cardnumber");
const moneyInput = document.querySelector(".money-input");

//for hidding div
const hide = function (s) {
  s.classList.add("d-none");
};
// for showing div
const show = function (s) {
  s.classList.remove("d-none");
};

document.querySelector(".continue-one").addEventListener("click", function () {
  if (userName.value == "") {
    userName.classList.add("wrong");
  } else {
    hide(screenOne);
    show(screenTwo);
    sessionStorage.setItem("uname", `${userName.value}`);
    const uname = sessionStorage.getItem("uname");
    document.querySelector(".confirm-name").textContent = `${uname}`;
    userName.classList.remove("wrong");
  }
});

document.querySelector(".continue-two").addEventListener("click", function () {
  if (cardNumber.value == "") {
    cardNumber.classList.add("wrong");
  } else {
    hide(screenOne);
    hide(screenTwo);
    show(screenThree);
    sessionStorage.setItem("cardnumber", `${cardNumber.value}`);
    const cardnumber = sessionStorage.getItem("cardnumber");
    document.querySelector(".confirm-card").textContent = `${cardnumber}`;
    cardNumber.classList.remove("wrong");
  }
});

document.querySelector(".proceed").addEventListener("click", function () {
  if (moneyInput.value == "") {
    moneyInput.classList.add("wrong");
  } else {
    hide(screenOne);
    hide(screenTwo);
    hide(screenThree);
    show(screenFour);
    sessionStorage.setItem("amount", `${moneyInput.value}`);
    const amount = sessionStorage.getItem("amount");
    document.querySelector(".confirm-amount").textContent = `${amount}`;
    moneyInput.classList.remove("wrong");
  }
});

backScreenTwo.addEventListener("click", function () {
  show(screenOne);
  hide(screenTwo);
  hide(screenFour);
});

backScreenThree.addEventListener("click", function () {
  hide(screenOne);
  show(screenTwo);
  hide(screenThree);
  hide(screenFour);
});
backScreenFour.addEventListener("click", function () {
  hide(screenOne);
  hide(screenTwo);
  show(screenThree);
  hide(screenFour);
});

// Typing input in dynamic card
cardNumber.addEventListener("keyup", function () {
  cardText.textContent = `${cardNumber.value}`;
});

//get values from sessionStorage and rediect to UPI apps

document.querySelector(".pay").addEventListener("click", function () {
  const handleName = "@paytm";
  //to be used later: gmcbl offical upi handle = .gmcbl@idfcbank
  const finalLink = `upi://pay?pa=${sessionStorage.getItem(
    "cardnumber"
  )}${handleName}&pn=${sessionStorage.getItem(
    "uname"
  )}&cu=INR&am=${sessionStorage.getItem("amount")}`;
  window.open(`${finalLink}`, "_self");
});
