const intialState = {
    product: [],
    notification: null,
}

export const getData = (state = intialState, action) => {
    switch (action.type) {
        case 'setdata':
            return {
                ...state,
                product: action.payload,
            };
    }
    
    switch (action.type) {
        case 'notification':
            return {
                message: action.payload.type,
                open: action.payload.open,
            }
    }
    return state;
}
