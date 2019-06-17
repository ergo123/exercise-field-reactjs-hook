import React, {useState, useEffect} from 'react';

export function ChangeThrottled() {
    const [text, setText] = useThrottledValue(400);
    return (
        <div>
            <h1>Throttle</h1>
            <h3>{text}</h3>
            <input onChange={e => setText(e.target.value)} />
        </div>
    )
}

function useThrottledValue(debounce = 1000) {
    const [text, setText] = useState('');
    const [finalText, setFinalText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFinalText(text);
        }, debounce)
        return () => clearTimeout(timeout);
    }, [text]);

    return [finalText, setText];
}
