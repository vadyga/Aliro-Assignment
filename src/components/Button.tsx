import React, {ReactNode} from 'react';
import styles from "../styles/Button.module.scss"

interface ButtonProps {
    children: ReactNode;
}

const Button = ({children}: ButtonProps) => {
    return (
        <button className={styles.button} type="submit">
            {children}
        </button>
    );
};

export default Button;
