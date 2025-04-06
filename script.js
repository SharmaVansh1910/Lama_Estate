// Simple JS toggle for the "Buy" / "Rent" tabs (visual effect only)
const tabBtns = document.querySelectorAll(".tab-btn");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("bg-black", "text-white"));
    btn.classList.add("bg-black", "text-white");
  });
});
