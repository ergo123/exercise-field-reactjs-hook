const initalState = {
    counter: 0,
    exchangeRates: [],
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'DELTA': {
            return { ...state, counter: state.counter + action.value };
        }
        case 'RESET_COUNTER': {
            return { ...state, counter: 0 };
        }
        case 'SET_EXCHANGE_RATES': {
            return { ...state, exchangeRates: action.value };
        }
    }
    return state;
};

export default reducer;