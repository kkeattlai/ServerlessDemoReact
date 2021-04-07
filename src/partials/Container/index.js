import React from "react";

import styles from "./Container.module.css";

const Container = (props) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.wrapper }>
                { props.children }
            </div>
        </div>
    );
}

export default Container;