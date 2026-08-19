class home extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
            <div id="homecontainer">
                <div id="homepage">
                    <div id="title">
                        <h1>Budjet</h1>
                    </div>
                    <div id="text">
                        <p>Welcome at Budjet, where you can track and budjet your finances!</p>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('home-big-text', home);