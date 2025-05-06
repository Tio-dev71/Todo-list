import html from '../core.js';


function Addbox() {
    return html`
        <div class="todo_addbox">
            <input 
            class="todo_addbox-input" 
            placeholder="What would you like to do ?" 
            type="text"
            autofocus
            onkeyup = "event.keyCode === 13 && dispatch('add', this.value.trim())"
            >

            <div class="line"></div>
            <button class="todo_addbox-btn"
            autofocus
            onclick="dispatch('addbtn', document.querySelector('.todo_addbox-input').value.trim())"
            >Add</button>
        </div>
    `
}

export default Addbox