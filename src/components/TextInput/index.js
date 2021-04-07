import React, { useState } from "react";

import styles from "./TextInput.module.css";

const TextInput = (props) => {
    const [ focus, setFocus ] = useState(false);

    const handleBlur = () => {
        setFocus(false);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    return (
        <div
            className={ styles.container }
            style={{ borderColor: (focus) ? "rgb(100, 100, 100)" : "rgb(200, 200, 200)" }}
        >
            <input
                className={ styles.input }
                onBlur={ handleBlur }
                onFocus={ handleFocus }
                placeholder={ props.placeholder }
            />
        </div>
    );
}

export default TextInput;