import React from "react";

import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
    return (
        <div className={ styles.container }> 
            <input
                { ...props.register(props.name) }
                className={ styles.input }
                type="radio"
                defaultValue={ props.value }
            />
            <label className={ styles.label } htmlFor={ props.name }>{ props.label }</label>
        </div>
    );
}

export default Checkbox;


