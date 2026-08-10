class MyNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
        <nav id="navbar">
            <ul>
                <li><a href="../pages/home.html">Home</a></li>
                <li><a href="../pages/budjet.html">Budjet</a></li>
            </ul>
        </nav>    
        `;
    }
}

customElements.define('my-navbar', MyNavBar);