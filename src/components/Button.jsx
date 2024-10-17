import React from 'react';

function Button() {
    const handleMouseOver = () => {
        alert("Mouse over me!");
    };

    return (
        <div>
            <button onMouseOver={handleMouseOver}>Mouse over Button</button>
        </div>
    );
}

export default Button;
