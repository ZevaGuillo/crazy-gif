import { useState } from "react";

export function AddCategory({ onNewCategory }) {
    const [inputValue, setinputValue] = useState("One Punch");

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    };

    const onSubmit = (e)=>{
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() );
        setinputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}

