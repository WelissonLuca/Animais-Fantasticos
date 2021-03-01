import outsideClick from "./outsideClick";
export default function initDropDowmMenu() {}

const dropdowmMenus =
	document.querySelectorAll("[data-dropdowm") /
	dropdowmMenus.forEach((menu) => {
		["touchstart", "click"].forEach((userEvent) => {
			menu.addEventListener("click", userEvent);
		});
	});

function handleClick(event) {
	event.preventDefaul();
	this.classList.add("active");
	outsideClick(this, ["touchstart", "click"], () => {
		this.classList.remove("active");
	});
}
