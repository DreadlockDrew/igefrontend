import React from 'react';
import '../../css/DetailedProblemCard.css';

const DetailedProblemCard = ({ problem, onBack ,onReview}) => {
    return (
        <div className="detailed-problem-card">
            <div className="detailed-problem-card__navbar">
                <button className="detailed-problem-card__navbar-button" onClick={onBack}>Back</button>
                <button className="detailed-problem-card__navbar-button" onClick={onReview}>Review</button>
                <button className="detailed-problem-card__navbar-button">Notes</button>
            </div>
            <div className="detailed-problem-card__problem-content">
                <h2 className="detailed-problem-card__title">{problem.title}</h2>
                <p className="detailed-problem-card__difficulty">   {problem.difficulty}</p>
                <p className="detailed-problem-card__description">Description: {problem.description}</p>
            </div>
        </div>
    );
};

export default DetailedProblemCard;