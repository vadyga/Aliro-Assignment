import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating', () => {
    test('renders the correct number of stars', () => {
        const { container } = render(<StarRating rating={3} onChange={() => {}} />);
        const stars = container.querySelectorAll('.ratingStar');
        expect(stars.length).toBe(5);
    });

    test('selects the correct star when clicked', () => {
        const handleChange = jest.fn();
        const { container } = render(<StarRating rating={0} onChange={handleChange} />);
        const secondStar = container.querySelectorAll('.ratingStar')[1];
        fireEvent.click(secondStar);
        expect(handleChange).toHaveBeenCalledWith(2);
    });

    test('highlights stars on mouseover', () => {
        const { container } = render(<StarRating rating={0} onChange={() => {}} />);
        const secondStar = container.querySelectorAll('.ratingStar')[1];
        fireEvent.mouseEnter(secondStar);
        expect(secondStar.classList.contains('ratingStar_hovered')).toBe(true);
    });

    test('the selected star has the correct styles applied', () => {
        const { container } = render(<StarRating rating={3} onChange={() => {}} />);
        const selectedStars = container.querySelectorAll('.ratingStar_selected');
        expect(selectedStars.length).toBe(3);
    });

    test('resets highlight on mouseout', () => {
        const handleChange = jest.fn();
        const { container } = render(<StarRating rating={3} onChange={handleChange} />);
        const thirdStar = container.querySelectorAll('.ratingStar')[2];
        fireEvent.mouseEnter(thirdStar);
        fireEvent.mouseLeave(thirdStar);
        expect(container.querySelector('.ratingStar_hovered')).toBeNull();
    });
});