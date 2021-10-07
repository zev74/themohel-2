


const hamburgerCheckbox = document.getElementById('hamburgerCheckbox')
const hamburger = document.getElementById('hamburger')
const mainNav = document.querySelector('#mainNav')

function toggleMenu() {
    hamburgerCheckbox.checked ? mainNav.className = "mainNavMoOpen" :
    mainNav.className = "mainNavMoClosed"
}

const menuDisplayBlock = () => {

  // let maxQuery = window.matchMedia('(max-width: 900px)')
  // // let minQuery = window.matchMedia('(min-width: 899px)')

  // console.log('hi')
  // if(maxQuery.matches) {
  //   mainNav.style.display = "flex";
  //   mainNav.style.alignItems = "center";
  //   mainNav.style.justifyContent = "center";
  // }
  // else {
  //   mainNav.style.alignItems = "center";
  //   mainNav.style.justifyContent = "center";
  // }

  // if(window.innerWidth > 900) {
  //   mainNav.style.display = "flex" 
  //   console.log(window.innerWidth)
  // }
}

hamburger.addEventListener('click', toggleMenu)
// window.addEventListener('resize', menuDisplayBlock)

