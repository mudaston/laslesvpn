const header = document.querySelector("#header");
const header__container = header.querySelector(".header__container");

window.addEventListener("scroll", () => {
	const offset = window.scrollY;

	if (offset > 20) {
		header__container.classList.add("active");
		header.classList.add("active");
		return;
	}

	header__container.classList.remove("active");
	header.classList.remove("active");
});
