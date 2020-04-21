const INITIAL_STATE = {
    count: 0,
    title: 'Hello World'
};

const countReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_COUNT":
            return {
                ...state,
                count: action.payload ? state.count + 1 : state.count - 1
            };
        default:
            return state;
    }
};

export default countReducer;