document.getElementById("cashout").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("cashout button clicked");
  const cashout = document.getElementById("out-money").value;
  const cashoutNumber = parseFloat(cashout);
  const pin = document.getElementById("cashout-pin-number").value;
  console.log(cashout, pin);
  if (pin === "1234") {
    // console.log("money is reducing");
    const balance = document.getElementById("current-balance").innerText;
    const balanceNumber = parseFloat(balance);
    const newBalance = balanceNumber - cashoutNumber;
    document.getElementById('current-balance').innerText = newBalance
  } else {
    alert("Failed To cash out. Try again Later");
  }
});
