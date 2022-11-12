const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const toggleNav = select(".toggle");
const navbar = select(".navbar");

toggleNav.addEventListener("click", function () {
  navbar.classList.toggle("toggle-active");

  if (navbar.classList.contains("toggle-active")) {
    this.innerHTML = `<i class="uil uil-times"></i>`;
  } else {
    this.innerHTML = `<i class="uil uil-list-ui-alt"></i>`;
  }
});
