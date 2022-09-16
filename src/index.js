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

const emptyButton = document.getElementById("empty-table");

emptyButton.addEventListener("click", () => {
  const users = document.getElementById("users");
  let oldRows = document.getElementsByTagName("tr");
  let rowCount = oldRows.length;

  let old_tbody = document.getElementById("tbody");
  users.removeChild(old_tbody);
  let new_tbody = document.createElement("tbody");
  new_tbody.setAttribute("id", "tbody");
  users.appendChild(new_tbody);
});
