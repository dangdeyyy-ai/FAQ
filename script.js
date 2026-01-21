document.querySelectorAll(".faq").forEach((f) => {
    f.addEventListener("click", () => {
        f.classList.toggle("active");
    });
});
