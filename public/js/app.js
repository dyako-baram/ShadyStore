const toggle = document.getElementsByClassName("burger")[0];
const nav = document.getElementsByClassName("links")[0];
toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
const imgs = document.querySelectorAll("img");
for (let index = 0; index < imgs.length; index++) {
  imgs[index].setAttribute("loading", "lazy");
  imgs[index].removeAttribute("lazy");
}
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
const isSigned = document.querySelector("#login_signed");
const account = document.querySelector("#nav_link_account");

const cEmail = getCookie("email");
if (cEmail != "" && cEmail != null) {
  isSigned.innerText = `Logout`;
  isSigned.title = "Logout";
  isSigned.href = "logout.html";

  document.querySelector("#myEmail").innerText = `Welcome ${cEmail}`;
} else {
  isSigned.innerText = "login/signup";
}
