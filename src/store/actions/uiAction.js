const GET_DATA_LIST_REQUEST = 'GET_DATA_LIST_REQUEST'
const GET_DATA_LIST_SUCCESS = 'GET_DATA_LIST_SUCCESS'
const GET_DATA_LIST_FAILURE = 'GET_DATA_LIST_FAILURE'


const getUserListRequest = (data) => ({
    type: GET_DATA_LIST_REQUEST,
    data
})

const getUsersListSuccess = (data) => ({
    type: GET_DATA_LIST_SUCCESS,
    data
})

const getUsersListFailure = (data) => ({
    type: GET_DATA_LIST_FAILURE,
    data
})