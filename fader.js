let fader = (el) => {
	 let elem = document.querySelector(el)
	elem.classList.add("fadeOut")
	  setTimeout(()=> {
	  	elem.classList.remove("fadeOut")
   		elem.classList.add("fadeIn")
    }, 1000)
}