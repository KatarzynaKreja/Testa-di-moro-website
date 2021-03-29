function visit() {
  let name = prompt("What is your name?");
  let sun = prompt("Do you like sun?");
  let mail = prompt("What is you email address?");
  sun = sun.toLowerCase();
  if (sun === "yes") {
    alert(
      "Great, " +
        name +
        " ! We will contact you and will help you to organize your sicilian trip! 🏖🏖🏖🏖"
    );
  } else {
    alert("Don't worry " + name + " ! We will find you some alaskan trip! ⛄");
  }
}

let visitSicily = document.querySelector("button");
visitSicily.addEventListener("click", visit);
