class Budjet extends HTMLElement {
    connectedCallback(){
        this.innerHTML=`
            <div id="main-container">
                <div id="content-container">
                    <div id="category-container">

                        <div id="category-title">
                            <p class="item cat-title">Categories</p>
                        </div>
                        <my-category></my-category>
                    </div>
                    <div id="expenses-container"></div>
                </div>
            </div>
        `;
    }
}


customElements.define('my-budjet', Budjet);