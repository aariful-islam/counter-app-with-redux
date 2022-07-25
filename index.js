const INCREAMENT = "INCREAMENT"
const DECREAMENT = "DECREAMENT"

// declare state 
const initaialState = () => {
    count: 0
};

//  action 
const incAction = () => {
    return {
        type: "INCREAMENT",
    }

}
const drcAction = () => {
    return {
        type: "DECREAMENT",
    }

}
// Reducer 
const counter = (state = initaialState, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return {
                ...state,
            count : state.count + 1,

            };
        case "DECREAMENT":
            return {
                ...state,
            count : state.count -1 1,

            };
        default:
            state;
    }

}

