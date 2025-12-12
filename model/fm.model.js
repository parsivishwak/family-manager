const saveButton = document.getElementById("button");

function saveData() {
  const inputName = document.getElementById("detailsa");
  const inputAge = document.getElementById("detailsb");
  const inputEmail = document.getElementById("detailsc");
  const inputPhonenum = document.getElementById("detailsd");
  const inputQalification = document.getElementById("detailse");
  const inputDob = document.getElementById("detailsf");

  if (inputName) {
    const inputname = inputName.value;
    localStorage.setItem("username", inputname);
    console.log("Success: Name saved.");
  } else {
    console.error("Error: Element with ID 'detailsa' not found.");
  }

  if (inputAge) {
    const inputage = inputAge.value;
    localStorage.setItem("userage", inputage);
    console.log("Success: Age saved.");
  } else {
    console.error("Error: Element with ID 'detailsb' not found.");
  }

  if (inputEmail) {
    const inputemail = inputEmail.value;
    localStorage.setItem("useremail", inputemail);
    console.log("Success: Email saved.");
  } else {
    console.error("Error: Element with ID 'detailsc' not found.");
  }

  if (inputPhonenum) {
    const inputphonenum = inputPhonenum.value;
    localStorage.setItem("userphonenum", inputphonenum);
    console.log("Success: Phone number saved.");
  } else {
    console.error("Error: Element with ID 'detailsd' not found.");
  }

  if (inputQalification) {
    const inputqalification = inputQalification.value;
    localStorage.setItem("userqualification", inputqalification);
    console.log("Success: Qualification saved.");
  } else {
    console.error("Error: Element with ID 'detailse' not found.");
  }

  if (inputDob) {
    const inputdob = inputDob.value;
    localStorage.setItem("userdob", inputdob);
    console.log("Success: DOB saved.");
  } else {
    console.error("Error: Element with ID 'detailsf' not found.");
  }
}

function displayData() {
  const usernamedata = localStorage.getItem("username");
  const usermaildata = localStorage.getItem("useremail");
  const useragedata = localStorage.getItem("userage");
  const userphonenumdata = localStorage.getItem("userphonenum");
  const userqualificationdata = localStorage.getItem("userqualification");
  const userdobdata = localStorage.getItem("userdob");

  console.log("--- Retrieving Data ---");

  if (usernamedata) {
    console.log("Name retrieved:", usernamedata);
  } else {
    console.log("No Name found in storage.");
  }

  if (usermaildata) {
    console.log("Email retrieved:", usermaildata);
  }

  if (useragedata) {
    console.log("Age retrieved:", useragedata);
  }

  if (userphonenumdata) {
    console.log("Phone retrieved:", userphonenumdata);
  }

  if (userqualificationdata) {
    console.log("Qualification retrieved:", userqualificationdata);
  }

  if (userdobdata) {
    console.log("DOB retrieved:", userdobdata);
  }
}

if (saveButton) {
  saveButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveData();
    displayData();
  });
}
 