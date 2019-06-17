import React, {useState} from 'react';

export function ToDo() {

    const todo = useToDo();

    return (
        <div>
            <h1>TODO list (no redux)</h1>
            <div>
                <input {...todo}></input>
            </div>
            <ul>
                { todo.list.map(x => (<li {...x}>{x.value}</li>)) }
            </ul>
        </div>
    )
}

function useToDo() {
    const [item, setItem] = useState('');
    const [list, setList] = useState(['aaa', 'bbb']);

    const updateItem = e => setItem(e.target.value);
    const handleInputChange = e => {
        if (e.which === 13 && e.target.value) {
            setList([...list, e.target.value]);
            setItem('');
        }
    };
    const removeElement = index => () => setList(list.filter((x, i) => index !== i));

    return {
        value: item,
        list: list.map((item, index) => ({
            value: item,
            key: index,
            onClick: removeElement(index),
        })),
        onChange: updateItem,
        onKeyUp: handleInputChange,
    };
}