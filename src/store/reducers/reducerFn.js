 
export const reducerFn = (state = { counter: 10 }, action) => {
    if (action.type === "Inc") {
        return { counter: state.counter + 1 }
    }
    return state;
}