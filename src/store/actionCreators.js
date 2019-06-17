import {useDispatch} from 'react-redux';
import {fetchExchangeRates} from '../api/API';

export function useDeltaAction() {
    const dispatch = useDispatch();
    return deltaValue => dispatch({ type: 'DELTA', value: deltaValue });
}

export function useResetCounterAction() {
    const dispatch = useDispatch();
    return () => dispatch({ type: 'RESET_COUNTER' });
}

export function useFetchExchangeRateAction() {
    const dispatch = useDispatch();
    return async table => {
        try {
            const response = await fetchExchangeRates(table)
            dispatch({type: 'SET_EXCHANGE_RATES', value: response[0].rates});
        } catch(error) {
            dispatch({type: 'SET_EXCHANGE_RATES', value: []});
        }
    }
}