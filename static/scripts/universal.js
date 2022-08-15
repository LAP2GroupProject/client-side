const navBarSmallBg = document.getElementById("navBarSmallBg");
const navLinksSmall = document.getElementById("navLinksSmall");
const navBarIcon = document.getElementById("bars");

// toggles nav width
navBarIcon.addEventListener("click", () => {
  if (navBarSmallBg.style.height === "4rem") {
    navBarSmallBg.style.height = "10rem";
    navLinksSmall.style.display = "grid";
  } else {
    navBarSmallBg.style.height = "4rem";
    navLinksSmall.style.display = "none";
  }
});
