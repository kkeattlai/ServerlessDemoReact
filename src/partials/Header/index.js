import React from "react";

import TextInput from "../../components/TextInput";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.wrapper }>
                <div className={ styles.title }>
                    Serverless Full Stack Demo
                </div>
                <div className={ styles.search_input }>
                    <TextInput
                        placeholder="Search here"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;