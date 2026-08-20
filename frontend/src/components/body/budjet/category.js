class MyCategory extends HTMLElement {
    category = '';
    id = 0;

    // writes the input and creates the container to display categories
    connectedCallback() {
        this.innerHTML = `
            <div id="category-add-input">
               <label for="add-input">Add Category</label>
               <input 
                  type="text"
                  id='add-input'
                  name="add-input" 
                  class="item cat-add" 
                  placeholder=" add category"
                  data-label="add-input"
               />
            </div>
            <div id="category-shown">
            </div>
        `;

        this.shownContainer = this.querySelector('#category-shown');

        // creates and eventlistener to see if user clicked Enter
        // then adds the input value to this.category
        // at last calls func processcategory to idisplay added category
        const addedCat = this.querySelector('#add-input');
        addedCat.addEventListener("keydown", (event) => {
            if (event.code === 'Enter') {
                this.category = addedCat.value;
                if (this.category.trim() !== '') {
                    this.processCategory();
                    addedCat.value = '';
                }
            }
        });
    }

    processCategory() {
        const idCheck = this.querySelectorAll('[data-label="cat-items"]');
        this.id = idCheck.length; // count existing items → next unique id

        const item = document.createElement('div');
        item.id = `cat-${this.id}`; // prefixed so it won't collide with other ids on the page
        item.className = 'items-shown';
        item.dataset.label = 'cat-items';

        const text = document.createElement('p');
        text.textContent = this.category; // safe: dynamic value via textContent

        item.appendChild(text);
        this.shownContainer.appendChild(item); // append, don't replace

        this.category = '';
    }
}
customElements.define('my-category', MyCategory);