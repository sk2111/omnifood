const yearRef = document.querySelector(".year");
const mobileBtnRef = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const heroSecRef = document.querySelector(".section-hero");

//mobile link
yearRef.textContent = new Date().getFullYear();
mobileBtnRef.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//sticky navigation
const observer = new IntersectionObserver(
  function (entries) {
    const [ent] = entries;
    if (!ent.isIntersecting) {
      return document.body.classList.add("sticky");
    }
    document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  },
);
observer.observe(heroSecRef);
