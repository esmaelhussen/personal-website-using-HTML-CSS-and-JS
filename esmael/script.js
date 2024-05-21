function formatPhoneNumber() {
  var phoneNumberInput = document.getElementById("phone");
  var phoneNumber = phoneNumberInput.value;

  phoneNumber = phoneNumber.replace(/[^+\d]/g, "");

  if (!phoneNumber.startsWith("+251")) {
    if (phoneNumber.startsWith("+25")) {
      phoneNumber = phoneNumber.replace("+25", "+251");
    } else {
      phoneNumber = "+251" + phoneNumber;
    }
  }

  if (phoneNumber.length > 13) {
    phoneNumber = phoneNumber.slice(0, 13);
  }

  phoneNumberInput.value = phoneNumber;

  document.getElementById("phoneError").innerText = "";
}

function validateForm(event) {
  var phoneNumberInput = document.getElementById("phone");
  var phoneNumber = phoneNumberInput.value;

  if (phoneNumber.length !== 13) {
    document.getElementById("phoneError").innerText =
      "Please enter a valid phone number starting with +251 and followed by 9 digits.";
    event.preventDefault();
  }
}
document
  .getElementById("nameInput")
  .addEventListener("input", function (event) {
    let inputValue = event.target.value;
    let onlyCharacters = /^[a-zA-Z]*$/;

    if (!onlyCharacters.test(inputValue)) {
      event.target.value = inputValue.slice(0, -1);
    }
  });

function validateEmail() {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  if (!email.endsWith(".com")) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email address ending with '.com'.";
    return false; //
  }
  return true; //
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function browserSupportsCSSProperty(propertyName) {
  var elm = document.createElement("div");
  propertyName = propertyName.toLowerCase();

  if (elm.style[propertyName] != undefined) return true;

  var propertyNameCapital =
      propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
    domPrefixes = "Webkit Moz ms O".split(" ");

  for (var i = 0; i < domPrefixes.length; i++) {
    if (elm.style[domPrefixes[i] + propertyNameCapital] != undefined)
      return true;
  }

  return false;
}

const cookieBox = document.querySelector(".wrapper_cookie"),
  acceptBtn = cookieBox.querySelector("button");

// Function to hide the cookie box
function hideCookieBox() {
  cookieBox.classList.add("hide");
}

acceptBtn.addEventListener("click", () => {
  // Hide the cookie box when the accept button is clicked
  hideCookieBox();

  // Setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
});

// Checking if the cookie is already set when the page loads
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal");

// If cookie is set then hide the cookie box else show it
checkCookie != -1 ? hideCookieBox() : cookieBox.classList.remove("hide");
