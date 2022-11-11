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
  screenOne.classList.add("d-none");
  screenTwo.classList.remove("d-none");
  sessionStorage.setItem("uname", `${userName.value}`);
  const uname = sessionStorage.getItem("uname");
  document.querySelector(".confirm-name").textContent = `${uname}`;
});
// const test = sessionStorage.getItem("uname");
// console.log(test);
continueCardBtn.addEventListener("click", function () {
  screenOne.classList.add("d-none");
  screenTwo.classList.add("d-none");
  screenThree.classList.remove("d-none");
  sessionStorage.setItem("cardnumber", `${cardNumber.value}`);
  const cardnumber = sessionStorage.getItem("cardnumber");
  document.querySelector(".confirm-card").textContent = `${cardnumber}`;
});
proceed.addEventListener("click", function () {
  screenOne.classList.add("d-none");
  screenTwo.classList.add("d-none");
  screenThree.classList.add("d-none");
  screenFour.classList.remove("d-none");
  sessionStorage.setItem("amount", `${moneyInput.value}`);
  const amount = sessionStorage.getItem("amount");
  document.querySelector(".confirm-amount").textContent = `${amount}`;
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

cardNumber.addEventListener("keyup", function () {
  //   console.log(cardNumber.value);
  cardText.textContent = `${cardNumber.value}`;
});

document.querySelector(".pay").addEventListener("click", function () {
  //   console.log(
  //     `upi://pay?pa=${sessionStorage.getItem(
  //       "cardnumber"
  //     )}@okhdfcbank&pn=${sessionStorage.getItem(
  //       "uname"
  //     )}&cu=INR&am=${sessionStorage.getItem("amount")}`
  //   );
  //   window.open = "window.open('http://google.com)";
  //   opener.location = "https://www.plus2net.com";
  //   alert("yoo");

  const finalLink = `upi://pay?pa=${sessionStorage.getItem(
    "cardnumber"
  )}@okhdfcbank&pn=${sessionStorage.getItem(
    "uname"
  )}&cu=INR&am=${sessionStorage.getItem("amount")}`;

  //   const finalLink = "http://google.com";
  window.open(`${finalLink}`, "_self");
});

// upi://pay?pa=upiaddress@okhdfcbank&pn=JohnDoe&cu=INR&am=
// window.open("/page2.html", "_self");
