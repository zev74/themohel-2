


const hamburgerCheckbox = document.getElementById('hamburgerCheckbox')
const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')

function toggleMenu() {
    hamburgerCheckbox.checked ? mainNav.style.display = "block" :
    mainNav.style.display = "none"
}

function menuDisplayBlock(e) {
  console.log(e)
}
hamburger.addEventListener('click', toggleMenu)
document.body.addEventListener('resize', menuDisplayBlock(e))