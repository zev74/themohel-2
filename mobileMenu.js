


const hamburgerCheckbox = document.getElementById('hamburgerCheckbox')
const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')

function toggleMenu() {
    hamburgerCheckbox.checked ? mainNav.style.display = "block" :
    mainNav.style.display = "none"
}

menuDisplayBlock = () => {
  if(window.innerWidth > 900) {
    mainNav.style.display = "block" 
    console.log(window.innerWidth)
  }
}

hamburger.addEventListener('click', toggleMenu)
window.addEventListener('resize', menuDisplayBlock())

