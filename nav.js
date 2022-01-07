// For Menu 
let menuBtn = document.querySelector(".menu-btn")
let headerNav = document.querySelector("header nav ul")
	menuBtn.addEventListener("click", () => {

		menuBtn.classList.toggle("active")
		headerNav.classList.toggle("active")

})
  