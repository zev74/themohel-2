class Header extends HTMLElement {
  connectedCallback() {

    
    this.innerHTML = ` <div> <nav id="mainNav" class="mainNav">
            <ul class="navLinksGroup">
                <li class="navListItem">
                    <a class="navLink" href="https://zev74.github.io/themohel-2/index.html"> Home
                    </a>
                </li>
                <li class="navListItem">
                    <a class="navLink" href="https://zev74.github.io/themohel-2/aboutTheMohel.html"> About
                        The Mohel </a>
                </li>
                <li class="navListItem">
                    <a class="navLink" href="https://zev74.github.io/themohel-2/aboutTheBris.html"> About
                        The Bris </a>
                </li>
                <li class="navListItem"> <a class="navLink"
                        href="file:///C:/Users/zevsh/Documents/projects/themohel-2.0/index.html"> Testimonails </a>
                </li>
                <li class="navListItem"> <a class="navLink"
                        href="file:///C:/Users/zevsh/Documents/projects/themohel-2.0/index.html"> Contact </a>
                </li>
            </ul>
        </nav> 

        <nav class="mobileNav">
          <h1> hi </h1>

          <div id="hamburger" class="hamburger" > 
            <label>
                <input type="checkbox" id="hamburgerCheckbox" class="hamburgerCheckbox"> 
                    <div class="bar1"> </div>
                    <div class="bar2"> </div>
                    <div class="bar3"> </div>
                </input>
            </label>
          </div>

        </nav>



        </div> `
        
    }
}

const hamburgerCheckbox = document.getElementById('hamburgerCheckbox')
const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')


onClick="toggleMenu"

function toggleMenu() {
    hamburgerCheckbox.checked ? mainNav.style.display = "block" :
    mainNav.style.display = "none"
}

hamburger.addEventListener('click', toggleMenu)



customElements.define('the-header', Header)