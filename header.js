class Header extends HTMLElement {
  connectedCallback() {

    
    this.innerHTML = ` <div> <nav class="mainNav">
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
            <div class="container" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>

            <script>
              function myFunction(x) {
                x.classList.toggle("change");
              }
            </script>
        </nav>


        </div> `
        
    }
}


customElements.define('the-header', Header)