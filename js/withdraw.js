document.getElementById("btn-withdraw").addEventListener("click", function () {

  const newWithdrawAmount = document.getElementById("withdraw-field").value;
  const previousWithdrawTotal =document.getElementById("withdraw-total").innerText;

  const newWithdrawTotal = parseInt(previousWithdrawTotal) + parseInt(newWithdrawAmount);
  setTextElementValueById("withdraw-total", newWithdrawTotal);


  const previousBalanceTotal = document.getElementById("balance-total").innerText;
  const newBalanceTotal = parseInt(previousBalanceTotal) - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
