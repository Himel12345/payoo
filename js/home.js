// console.log('done')
document.getElementById("done").addEventListener("click", function () {
  // console.log('clicked')
  const addmoneyinput = document.getElementById("add-money").value;
  const pinnumberinput = document.getElementById("pin-number").value;
  console.log(addmoneyinput, pinnumberinput);
  if (pinnumberinput === "1969") {
   const balance = document.getElementById('current-balance').innerText;
   console.log(typeof balance);
   const addmoneynumber = parseFloat(addmoneyinput);
   const balanceNumber = parseFloat(balance);
   console.log(typeof balanceNumber)
   const newbalance = addmoneynumber+ balanceNumber;
   console.log(newbalance);

    document.getElementById('current-balance').innerText = newbalance
  } 
  else {
    alert("failed to add money");
  }
});
