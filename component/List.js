import html from '../core.js';
import { connect } from '../store.js';
import Todoitem from './Todoitem.js';


function List( { todos , filter , filters} ) {
    return html`
        <div class="todo_list">
            <div class="todo_list-head">
                <span class="todo_list-head_item"> 
                    <strong>${todos.filter(filters.active).length}</strong> item left
                </span>

            <ul class = "filters"> 
                ${Object.keys(filters).map(type => html`
                        <button class="todo_list-head_func">
                            <a class = "${filter === type && 'selected'}" href = '#' onclick = "dispatch('switchFilter', '${type}')">${type[0].toUpperCase() + type.slice(1)}</a>
                        </button>
                    `)}
            </ul>

            ${todos.filter(filters.completed).length > 0 && 
                html`<div class="todo_list-head_item" onclick="dispatch('clearCompleted')">Clear completed
            </div>`
            }
                
            </div>

            <div class="todo_list-global">
                <h1>List</h1>
                <h1>Close</h1>
            </div>

            <ul class = "List">
                ${todos.filter(filters[filter]).map((todo, index) => Todoitem({ todo, index }))}
            </ul>

        </div>
    `
}

export default connect()(List)