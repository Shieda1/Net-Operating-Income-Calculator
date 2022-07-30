// https://calculator.swiftutors.com/net-operating-income-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const netOperatingIncomeRadio = document.getElementById('netOperatingIncomeRadio');
const contributionMarginRadio = document.getElementById('contributionMarginRadio');
const fixedExpensesRadio = document.getElementById('fixedExpensesRadio');

let netOperatingIncome;
let contributionMargin = v1;
let fixedExpenses = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

netOperatingIncomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Contribution Margin';
  variable2.textContent = 'Fixed Expenses';
  contributionMargin = v1;
  fixedExpenses = v2;
  result.textContent = '';
});

contributionMarginRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Operating Income';
  variable2.textContent = 'Fixed Expenses';
  netOperatingIncome = v1;
  fixedExpenses = v2;
  result.textContent = '';
});

fixedExpensesRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Operating Income';
  variable2.textContent = 'Contribution Margin';
  netOperatingIncome = v1;
  contributionMargin = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(netOperatingIncomeRadio.checked)
    result.textContent = `Net Operating Income = ${computeNetOperatingIncome().toFixed(2)}`;

  else if(contributionMarginRadio.checked)
    result.textContent = `Contribution Margin = ${computeContributionMargin().toFixed(2)}`;

  else if(fixedExpensesRadio.checked)
    result.textContent = `Fixed Expenses = ${computeFixedExpenses().toFixed(2)}`;
})

// calculation

function computeNetOperatingIncome() {
  return Number(contributionMargin.value) - Number(fixedExpenses.value);
}

function computeContributionMargin() {
  return Number(netOperatingIncome.value) + Number(fixedExpenses.value);
}

function computeFixedExpenses() {
  return Number(contributionMargin.value) - Number(netOperatingIncome.value);
}