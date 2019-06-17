import React, { useState, useEffect } from 'react';

export function TikTak() {

    const [paused, setPaused] = useState(true);
    const value = useTikTak(paused);

    const x = useInputValue();

    return (
        <div>
            <h1>{x.value} {value}</h1>
            <div>
                { paused
                    ? <button onClick={() => setPaused(false)}>Play</button>
                    : <button onClick={() => setPaused(true)}>Pause</button>
                }
            </div>
            <div>
                <input {...x} />
            </div>
        </div>
    )
}

function useInputValue() {
    const [value, setValue] = useState('');
    const onChange = e => setValue(e.target.value);
    return { value, onChange };
}

function useTikTak(paused) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(() => setValue(paused ? value : value + 1), value);
        return () => clearTimeout(timeout);
    });
    return value;
}