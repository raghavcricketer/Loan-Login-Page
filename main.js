//Targeting all input and output elements
const calcForm = document.getElementById('calc-form'),
loanAmount = document.getElementById('loan-amount'),
interestRate = document.getElementById('interest-rate'),
noOfMonth = document.getElementById('no-of-month'),
calcBtn = document.getElementById('calc-btn'),
clearBtn = document.getElementById('clear-btn'),
paymentInfoList = document.querySelectorAll('.payment-info div span');

//preventing default behaviour when submit event occurs
calcForm.addEventListener('submit', (e) => {
e.preventDefault();
showPaymentInfo();
});

//event listener for reset button
clearBtn.addEventListener('click', clearInputAndResult);

function clearInputAndResult(){
  calcForm.reset();
  paymentInfoList.forEach(item => {
    item.innerHTML = "&mdash;";
  });
  }

// Displaying each Output individually
function showPaymentInfo(){
let monthlyPayment = calcMonthlyPayment(loanAmount.value, interestRate.value, noOfMonth.value);

paymentInfoList[0].innerHTML = `${loanAmount.value}`;
paymentInfoList[1] .innerHTML = `${interestRate.value}%`;
paymentInfoList[2].innerHTML = `${noOfMonth.value}`;
paymentInfoList[3].innerHTML = `${monthlyPayment}`;
}

//Mathematical Calculations for monthly payments(EMI)
function calcMonthlyPayment(PV, i, n){
i = (i/100) / 12;
let PMT = (PV * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
return PMT.toFixed(2);
}