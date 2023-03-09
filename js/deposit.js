// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
   
  
  const newDepositAmount = document.getElementById("deposit-field").value;
  const previousDepositTotal = document.getElementById("deposit-total").innerText;
   
  const newDepositTotal = parseInt(previousDepositTotal) + parseInt(newDepositAmount);
  setTextElementValueById("deposit-total", newDepositTotal);





  // get previous balance by using the function
  const previousBalanceTotal = document.getElementById("balance-total").innerText;
  const newBalanceTotal = parseInt(previousBalanceTotal) + parseInt(newDepositAmount);
  setTextElementValueById("balance-total", newBalanceTotal);
});
