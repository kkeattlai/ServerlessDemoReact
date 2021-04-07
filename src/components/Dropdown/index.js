import React from "react";

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div className={ styles.container }>
            <select
                { ...props.register("filter") }
                className={ styles.input }
            >
                <option value="">Filter</option>
                { props.data.map(({ value, text }) => (
                    <option key={ `${value} ${text}` } value={ value }>{ text }</option>
                )) }
            </select>
        </div>
    );
}

export default Dropdown;