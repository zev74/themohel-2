class Footer extends HTMLElement {
    connectedCallback() {
  
      
      this.innerHTML = ` <div class="footerWrapper"> 
            <h3 class="footerCreatedBy">  Powerd by <a class="companyLink" href="mailto:zevishubov@gmail.com"> ZSsolutions™ <a> | 2021 </h3>
          </div> `
      }
  }
  
  
  customElements.define('the-footer', Footer)