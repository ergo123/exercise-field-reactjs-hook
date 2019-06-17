import React from 'react';
import {useTik} from '../../hooks/tick';

export function Tik() {
    const time = useTik();

    return (
        <h1>Tik: {time}</h1>
    )
}

