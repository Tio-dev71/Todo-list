import html from '../core.js';
import { connect } from '../store.js';


function Todoitem({ todo, index, editIndex }) {
    
    return html`
            <li 
            class="todo_list-content ${todo.completed && 'completed'}
            ${editIndex === index && 'edit'} 
            ">
                <div class="todo_list-content_view">
                    <input 
                        class="toggle" type="checkbox" 
                        ${todo.completed && 'checked'}
                        onchange = "dispatch('toggle', ${index})"
                    >
                    <label ondblclick="dispatch('edit', ${index})">${todo.title}</label>
                    <i class="fa-solid fa-trash destroy" onclick = "dispatch('remove', ${index})"></i>
                </div>
                <input class="edit" value="${todo.title}" 
                onkeyup = "event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('endEdit', this.value.trim())"
                onblur = "dispatch('endEdit', this.value.trim())"
                >
            </li>
    `
}

export default connect()(Todoitem)