// ProblemCard.js
import React from 'react';
import '../../css/ProblemCard.css'; // importing the CSS file


const ProblemCard = ({ problem, onCardSelect ,dueTime}) => (

    <div className="problem-card" onClick={() => onCardSelect(problem)}>
        <div className="inner-card">
            <h2 className={problem.difficulty}>{problem.title}</h2>
            <p className={problem.difficulty}>{problem.difficulty}</p>
        </div>
        {dueTime && <p className="problem-card__due-time">Due in: {dueTime}</p>}
    </div>
);

export default ProblemCard;