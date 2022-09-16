import "./styles.css";

const submitButton = document.getElementById("submit-data");

submitButton.addEventListener("click", function () {
  let users = document.getElementById("users");
  let newRow = users.insertRow();

  let username = newRow.insertCell();
  username.innerHTML = document.getElementById("input-username").value;
  //console.log(document.getElementById("input-username").value);

  let email = newRow.insertCell();
  email.innerHTML = document.getElementById("input-email").value;
  //console.log(document.getElementById("input-email").value);

  let address = newRow.insertCell();
  address.innerHTML = document.getElementById("input-address").value;
  //console.log(document.getElementById("input-address").value);

  let admin = newRow.insertCell();
  if (document.getElementById("input-admin").checked) {
    admin.innerHTML = "X";
  } else {
    admin.innerHTML = "-";
  }
  //console.log(document.getElementById("input-admin").checked);
});
