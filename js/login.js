// console.log("hello");
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("clicked");
    const phonenumber = document.getElementById("number").value;
    const pinnumber = document.getElementById("pin").value;
    // console.log(phonenumber, pinnumber);
    if (phonenumber === '01712912239' && pinnumber === '1969'){
        console.log('you are logged in')
        window.location.href = '/home.html'
    }
    else{
        alert ('wrong')
    }
  });
