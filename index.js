const myPayment = document.querySelector('.myPayment');
const thePaymentButton = document.querySelector('.thePaymentButton');

thePaymentButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myPayment.innerText = inputBox.value;
     }
});

myPayment.addEventListener('click', function() {
    myPayment.classList.toggle('darkmode')
})

const theMessageButton = document.querySelector('.theMessageButton');

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});

let counter = 0;

const counterElem = document.querySelector('.counter');
const incrementBtn =  document.querySelector('.increment');
const decrementBtn = document.querySelector('.decrement');

incrementBtn.addEventListener('click', function() {
    counter++;
    counterElem.innerText = counter;
});

decrementBtn.addEventListener('click', function() {
    counter--;
    counterElem.innerText = counter;
});

const thePayButton = document.querySelector('.thePayButton');

thePayButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myPay.innerText = inputBox.value;
     }
});