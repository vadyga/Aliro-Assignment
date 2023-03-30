import React from 'react';
import companyLogoExample from '../assets/companyLogoExample.svg'
import styles from '../styles/CompanyItem.module.scss'
import StarIcon from "./StarIcon";

interface CompanyItemProps {
    name: string;
    rating: number;
    reviewCount: number;
    logo?: string
}

const CompanyItem = ({logo, name, rating, reviewCount}: CompanyItemProps) => {
    return (
        <div className={styles.company}>
            <div>
                <img src={logo ? logo : companyLogoExample} alt="Company logo"/>
            </div>
            <div>
                <div className={styles.companyName}>{name}</div>
                <div className={styles.companyReviews}>
                    <div className={styles.companyReviewsStars}>
                        {Array.from({length: rating}).map((_, index) => (
                            <StarIcon
                                key={index}
                                fill="#F3A712"
                                width="12"
                                height="12"
                                title="Star rating"
                                aria-label="Star rating"
                            />
                        ))}
                    </div>
                    <div className={styles.companyReviewsCount}>Reviews ({reviewCount})</div>
                </div>
            </div>
        </div>
    );
};

export default CompanyItem;
