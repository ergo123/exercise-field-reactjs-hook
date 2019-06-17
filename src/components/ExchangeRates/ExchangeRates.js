import React, {useState, useEffect} from 'react';
import {useFetchExchangeRateAction} from '../../store/actionCreators';
import {useExchangeRatesSelector} from '../../store/selectors';

export function ExchangeRates() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const minFilter = rate => {
        return rate.mid && rate.mid >= Number(min);
    };
    const maxFilter = rate => {
        return rate.mid && rate.mid <= Number(max);
    };

    const fetchExchangeRate = useFetchExchangeRateAction()
    const rates = useExchangeRatesSelector(pipe(minFilter, maxFilter));

    return (
        <div>
            <h1>Exchange rates:</h1>
            <div>
                <button onClick={() => fetchExchangeRate('A')}>A</button>
                <button onClick={() => fetchExchangeRate('B')}>B</button>
            </div>
            <div>
                Min: <input type="number" value={min} onChange={e => setMin(e.target.value)} />
            </div>
            <div>
                Max: <input type="number" value={max} onChange={e => setMax(e.target.value)} />
            </div>
            <ul>
                {rates.map(rate => (<li key={rate.code}>{rate.currency} {rate.mid}</li>))}
            </ul>
        </div>
    );
}

const pipe = (...args) => rate => args.reduce((result, fn) => result && fn(rate), true);

