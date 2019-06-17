import React from 'react';
import { useTak } from '../../hooks/tick';

export function Tak() {
    const time = useTak();

    return (
        <h1>Tak: {time}</h1>
    )
}

