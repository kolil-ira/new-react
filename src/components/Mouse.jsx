import React from 'react'; 

function Mouse() { // Correctly named
    const handleMouseOver = () => {
        alert("Mouse out me!");
    };

    return (
        <div>
            <button onMouseOver={handleMouseOver}>Mouse out Button</button> {/* Fixed event */}
        </div>
    );
}

export default Mouse; // Use uppercase 'Mouse'
