import {useSelector} from 'react-redux';

export function useCounterSelector() {
    return useSelector(state => state.counter);
}

export function useExchangeRatesSelector(filterFn = () => true) {
    return useSelector(state => state.exchangeRates)
        .filter(filterFn);
}