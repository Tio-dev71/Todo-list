export default function html([first, ...string], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, string.shift()),
        [first]
    )
    .filter(x => x && x !== true || x == 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer();  
    const roots = new Map();

    function render() {
        for (const [root, component] of roots) {
            const ouput = component()
            root.innerHTML = ouput
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },

        connect(selector = state => state) {
            return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args))
        },

        dispatch(act, ...args) {
            state = reducer(state, act, args)
            render()
        }
    }
}