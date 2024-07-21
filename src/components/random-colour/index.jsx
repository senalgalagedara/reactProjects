import { useState } from "react";

export default function RandomColor() {

    const [typeOfColot, setTypeOfColur] = useState('hex');
    const [color, setColor] = useState('#000000');

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,

        }}>
            <button>Create HEX Colour</button>
            <button>Create RGB Colour</button>
            <button>Generate Random Colour</button>
        </div>
    );

}