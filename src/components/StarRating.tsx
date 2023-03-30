import React, {useState} from 'react';
import styles from "../styles/StarRating.module.scss"
import StarIcon from "./StarIcon";

interface StarRatingProps {
    rating: number;
    onChange: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({rating, onChange}) => {
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleClick = (newValue: number) => {
        if (rating !== newValue) {
            onChange(newValue);
        }
    };

    const handleMouseEnter = (newValue: number) => {
        setHoveredRating(newValue);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const stars = Array.from({length: 5}, (_, index) => index + 1);

    return (
        <div
            className={styles.rating}
            onMouseLeave={handleMouseLeave}
        >
            {stars.map((starIndex) => (
                <span
                    key={starIndex}
                    className={`${styles.ratingStar} ${
                        starIndex <= rating ? styles.ratingStar_selected : ''
                    } ${
                        starIndex <= hoveredRating ? styles.ratingStar_hovered : ''
                    }`}
                    onClick={() => handleClick(starIndex)}
                    onMouseEnter={() => handleMouseEnter(starIndex)}
                >
                    <StarIcon/>
                </span>
            ))}
        </div>
    );
};

export default StarRating;
