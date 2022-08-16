const intialState = {
    isLoading: false,
    loaded: false,
    data: null,
    error: null
}


export const Uireducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_DATA_LIST_REQUEST':
            return {
                ...state,
                isLoading: true,
                lodded: false,
                date: null,
                error: null,
            }
        case 'GET_DATA_LIST_SUCCESS':
            return {
                isLoading: false,
                loaded: true,
                date: action.data,
                error: null,
            }
        case 'GET_DATA_LIST_FAILURE':
            return {
                ...state,
                isLoading: false,
                loaded: true,
                date: null,
                error: action.data,
            }
        default:
            return state
    }
}