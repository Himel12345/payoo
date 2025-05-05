console.log("hello");
document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    const phonenumber = document.getElementById("number").value;
    console.log(phonenumber);
  });
