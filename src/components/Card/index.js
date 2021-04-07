import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={ styles.container }>
            <div className={ styles.title }>{ props.title }</div>
            <div className={ styles.info }>
                <div className={ styles.episode }>{ props.episode } episode(s)</div>
                <div className={ styles.price }>A${ (props.price / 100).toFixed(2) }</div>
            </div>
        </div>
    );
}

export default Card;