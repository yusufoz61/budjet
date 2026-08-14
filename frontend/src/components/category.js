class Category extends HTMLElement {

    connectedCallback() {

        const input = this.querySelector('#add-input');
        input.addEventListener('keydown', e => {
            if(e.key === 'Enter') {
                const value = input.value;
                console.log('new category', value);
                input.value = '';
            }
        })
    }


    applyCategory() {

    }

}

customElements.define('my-category', Category);