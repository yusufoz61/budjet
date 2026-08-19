class Category extends HTMLElement {

    category = '';
    id = 0;

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

        const addedCat = document.querySelector('#add-input');
        addedCat.addEventListener("keydown", (event) =>{
            if(event.code === 'Enter'){
                console.log('enter', event.code);
                this.category = addedCat.value;
                if(this.category != null){
                    this.processCategory();
                }
            }
        })
    }

    processCategory() {
        const items = document.querySelector("#category-shown");
        const idCheck = document.querySelectorAll('[data-label="cat-items"]');
        if(idCheck === null){
            this.id = 0;
        }else{
            this.id += 1;
        }
        items.innerHTML = `
            <div id="${this.id}" class='items-shown' data-label="cat-items">
                <p>${this.category}</p>
            </div>
            `;
        this.category = '';

    }



}

customElements.define('my-category', Category);