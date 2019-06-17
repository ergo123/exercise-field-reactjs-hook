import React from 'react';
import {useDeltaAction, useResetCounterAction} from '../../store/actionCreators';
import {useCounterSelector} from '../../store/selectors';

export function Incrementor() {

    const delta = useDeltaAction();
    const resetCounter = useResetCounterAction();
    const value = useCounterSelector();

    return (
        <div>
            <h1>INC value: {value}</h1>
            <button onClick={() => delta(1)}>+1</button>
            <button onClick={() => delta(5)}>+5</button>
            <button onClick={() => resetCounter()}>reset</button>
        </div>
    )

}