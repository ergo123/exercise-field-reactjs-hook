import React, {useState} from 'react';

export function Map() {
    const [upperCaseValue, toUpperCase] = useMap(x => x.toUpperCase());
    const [lowerCaseValue, toLowerCase] = useMap(x => x.toLowerCase());
    const [splitted, split] = useMap(x => x.split('').join(' '));
    const [pipedValue, pipe] = usePipe(
        x => x.toUpperCase(),
        x => x.split(''),
        x => x.join(','),
        x => `[${x}]`,
    );

    const handle = e => {
        const value = e.target.value;
        toUpperCase(value);
        toLowerCase(value);
        split(value);
        pipe(value);
    }
    return (
        <div>
            <h1>Map</h1>
            <h3>to upper case: {upperCaseValue}</h3>
            <h3>to lower case: {lowerCaseValue}</h3>
            <h3>split: {splitted}</h3>
            <h3>piped (toUpperCase, split, join, toArray): {pipedValue}</h3>
            <input onChange={handle} />
        </div>
    )
}

function useMap(fn) {
    const [mappedValue, setMappedValue] = useState('');
    const map = x => setMappedValue(fn(x));
    return [mappedValue, map];
}

function usePipe(...functions) {
    const [processedValue, setProcessedValue] = useState('');

    const pipe = x => {
        const result = functions.reduce((value, fn) => fn(value), x);
        setProcessedValue(result);
    };

    return [processedValue, pipe];
}