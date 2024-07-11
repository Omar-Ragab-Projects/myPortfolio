let links = document.querySelectorAll(
  ".portfolio .porfolio-container .user-interface .links li"
);
let windows = document.querySelectorAll(".portfolio .user-informaion > div");
let userInformation = document.querySelectorAll(
  ".portfolio .user-informaion > span"
);

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((l) => l.classList.remove("show"));
    e.target.classList.add("show");
    windows.forEach((window) => {
      window.style.display = "none";
    });
    setTimeout((h) => {
      document.querySelector(
        `.user-informaion .${e.target.dataset.window}`
      ).style.display = "flex";
    }, 500);
    handleAnimate();
  });
});

function handleAnimate() {
  userInformation.forEach((span) => {
    span.classList.add("show");
  });
  setTimeout((h) => {
    userInformation.forEach((span) => {
      span.classList.remove("show");
    });
  }, 1000);
}
