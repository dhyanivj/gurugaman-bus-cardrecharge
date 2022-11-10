const continueNameBtn = document.querySelector('.continue-one')
const userName = document.querySelector('.username')
const screenOne = document.querySelector('.screen1')
const screenTwo = document.querySelector('.screen2')
const backScreenOne = document.querySelector('.back-s1')
const backScreenTwo = document.querySelector('.back-s2')

continueNameBtn.addEventListener('click', function () {
    console.log(userName.value);
    screenOne.classList.add('d-none')
    screenTwo.classList.remove('d-none')
})

backScreenTwo.addEventListener('click', function () {
    screenOne.classList.remove('d-none')
    screenTwo.classList.add('d-none')
})
