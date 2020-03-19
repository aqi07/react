
const initialState={
    count:3,
    number:1
}
function counterReducer(state = initialState,action) {
    switch(action.type){
        case 'add':
                return  {
                    count: state.count + 1  //计数器加一
                };
        case 'sub':
            if(state.count > 0){
                return  {
                    count: state.count - 1  //计数器加一
                };
            }
        default:
            return state
    }
}

export default counterReducer;
