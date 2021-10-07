


const hamburgerCheckbox = document.getElementById('hamburgerCheckbox')
const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')

function toggleMenu() {
    hamburgerCheckbox.checked ? mainNav.style.display = "block" :
    mainNav.style.display = "none"
}

function menuDisplayBlock() {
  console.log(window.innerWidth)
}
hamburger.addEventListener('click', toggleMenu)
document.body.addEventListener('resize', menuDisplayBlock(e))

