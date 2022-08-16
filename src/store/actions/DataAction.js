export const ApiData = () => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    return async (dispatch) => {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({
            type: 'setdata',
            payload: data,
        })
    };
}
