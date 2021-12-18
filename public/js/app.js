const toggle = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("links")[0];
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
const isSigned = document.querySelector("#login_signed");
const account = document.querySelector("#nav_link_account");

const cEmail = getCookie("email");
if (cEmail != "") {
  isSigned.innerText = `Logout`;
  isSigned.title="Logout"
  isSigned.href="logout.html"

  document.querySelector('#myEmail').innerText=`Welcome ${cEmail}`
} else {
  isSigned.innerText = "login/signup";
}