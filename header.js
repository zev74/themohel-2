class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <nav class="mainNav">
            <ul class="navLinksGroup">
                <li class="navListItem">
                    <a class="navLink" href="./index.html"> Home
                    </a>
                </li>
                <li class="navListItem">
                    <a class="navLink" href="./aboutTheMohel.html"> About
                        The Mohel </a>
                </li>
                <li class="navListItem">
                    <a class="navLink" href="./aboutTheBris.html"> About
                        The Bris </a>
                </li>
                <li class="navListItem"> <a class="navLink"
                        href="file:///C:/Users/zevsh/Documents/projects/themohel-2.0/index.html"> Testimonails </a>
                </li>
                <li class="navListItem"> <a class="navLink"
                        href="file:///C:/Users/zevsh/Documents/projects/themohel-2.0/index.html"> Contact </a>
                </li>
            </ul>
        </nav> `
    }
}


customElements.define('the-header', Header)