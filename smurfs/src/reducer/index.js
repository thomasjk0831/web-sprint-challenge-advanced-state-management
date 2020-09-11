const initialState = {
    smurfs : [],
    loading : false
}

export default (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_SMURFS':
            return {
                ...state,
                loading : true
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                smurfs : [...action.payload],
                loading: false
            }
        case 'POST_SMURFS':
            return {
                ...state,
                loading: true
            }
        case 'POST_SUCCESS':
            return {
                ...state,
                smurfs : [...state.smurfs, action.payload],
                loading: false

            }
        default:
            return state
    }
}