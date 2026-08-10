class MyNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`
            <ul>
                <li><a href="../pages/home.html">Home</a></li>
                <li><a href="../pages/budget.html">Budget</a></li>
            </ul>
        `;
    }
}

customElements.define('my-navbar', MyNavBar);