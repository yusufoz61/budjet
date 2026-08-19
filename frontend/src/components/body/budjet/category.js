class Category extends HTMLElement {

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
               <div id="cat-items"></div>
            </div>
        `;
    }


}

customElements.define('my-category', Category);