import React, {useState} from 'react';
import StarRating from './components/StarRating';
import CompanyItem from "./components/CompanyItem";
import styles from "./styles/ReviewForm.module.scss"
import Button from "./components/Button";
import Textarea from "./components/Textarea";

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState(1);
    const [description, setDescription] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Mock sending the form data to the server
        console.log({rating, description});
    };

    return (
        <div className={styles.review}>
            <div className={styles.reviewCompany}>
                <h1 className={styles.reviewTitle}>Write a review</h1>
                <CompanyItem rating={4} name="Stars Consult" reviewCount={532} />
            </div>
            <form onSubmit={handleSubmit} className={styles.reviewForm}>
                <div className={styles.reviewFormRow}>
                    <label htmlFor="rating">Rate your experience:</label>
                    <StarRating
                        rating={rating}
                        onChange={(value) => setRating(value)}
                    />
                </div>
                <Textarea description={description} setDescription={setDescription}/>
                <Button>
                    Send review
                </Button>
            </form>
        </div>
    );
};

export default ReviewForm;
