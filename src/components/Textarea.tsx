import React, {ChangeEventHandler} from 'react';
import styles from "../styles/Textarea.module.scss"

interface TextareaProps {
    description: string;
    setDescription: (description: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({description, setDescription}) => {
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setDescription(event.target.value);
    };


    return (
        <div className={styles.textarea}>
            <label htmlFor="description">Describe your experience</label>
            <textarea
                id="description"
                value={description}
                onChange={handleChange}
            />
        </div>
    );
};

export default Textarea;
