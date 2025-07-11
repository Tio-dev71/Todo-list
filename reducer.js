import storage from "./until/storage.js"

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null,
}

const actions = {
    addbtn({ todos }, title) {
        if (title) { 
            todos.push({ title, completed: false }); 
            storage.set(todos);
        } else {
            console.error('Title is empty!'); 
        }
    },
    add({ todos }, title) {
        if(title) {    
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },

    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },

    remove({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },

    switchFilter(state, filter) {
        state.filter = filter
    },

    clearCompleted(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },

    edit(state, index) {
        state.editIndex = index
    }, 
    
    endEdit(state, title) {
        if(state.editIndex !== null) {
            if(title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.remove(state,  state.editIndex)
            }
            state.editIndex = null
        }         
    }   
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state

    // switch(action) {
    //     case 'add':
    //         const [title] = args
    //         storage.set(todos)

    //         return {
    //             ...state,
    //   //              todos: [...state.todos, {
    //                 title,
    //                 completed: false
    //             }],
    //         }
    //     default:
    //         return state;
    // }
}