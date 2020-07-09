//specify app state changes in response to certain actions
export default (state, action) => {
    switch(action.type) {
        case 'DELETE':
            return {
                ...state,
            }
        default : 
        return state;
    }
}