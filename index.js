const {createStore} = require("redux")
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// declare state 
const initaialState = {
    count: 0
};

//  action 
const incAction = () => {
    return {
        type: "INCREMENT",
    }

}
const drcAction = () => {
    return {
        type: "DECREMENT",
    }

}
// Reducer 
const counter = (state = initaialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
              ...state,
              count: state.count + 1,
            };
        case "DECREMENT":
            return {
                ...state,
            count : state.count -1,

            };
        default:
            state;
    }

}

const store =createStore(counter)
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incAction());

