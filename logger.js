export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('PrevState: ', prevState)
        console.log('Action Arguments: ', action)
        const nextState = reducer(prevState, action, args)
        console.log('Next State: ', nextState)
        console.groupEnd()
        return nextState
    }
}