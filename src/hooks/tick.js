import { useState, useEffect } from 'react';

export function useTikTak(defaultValue = 0) {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        const timeout = setTimeout(() => setValue(value + 1), 1000);
        return () => clearTimeout(timeout);
    });
    return value;
}

export function useTik(defaultValue) {
    const value = useTikTak(defaultValue);
    return value % 2 === 1 ? value - 1 : value;
}

export function useTak(defaultValue) {
    const value = useTikTak(defaultValue);
    return value % 2 === 1 ? value : value - 1;
}