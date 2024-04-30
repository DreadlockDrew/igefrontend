// ProblemCard.js
import React from 'react';
import '../../css/ProblemCard.css'; // importing the CSS file


const ProblemCard = ({ problem, onCardSelect ,dueTime}) => (

    <div className="problem-card" onClick={() => onCardSelect(problem)}>
        <h2>{problem.title}</h2>
        <p>{problem.difficulty}</p>
        {dueTime && <p className="problem-card__due-time">Due in: {dueTime}</p>}
    </div>
);

export default ProblemCard;