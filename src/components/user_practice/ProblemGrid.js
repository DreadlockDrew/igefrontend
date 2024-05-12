// In ProblemGrid.js
import React, { useEffect, useState } from 'react';
import ProblemCard from './ProblemCard';
import DetailedProblemCard from './DetailedProblemCard';
import {fetchProblems, fetchUserReviewProfile, markProblemForReviewCycle,submitProblemAttempt} from '../navigation/api';
import '../../css/ProblemGrid.css';

const ProblemGrid = ({ filter }) => {
    const [problems, setProblems] = useState([]);
    const [selectedProblem, setSelectedProblem] = useState(null);
    const [reviewProfile, setReviewProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const calculateDueTime = (nextReview) => {
        if(!nextReview)
        {return null}
        const now = new Date();
        const dueDate = new Date(nextReview);
        const diffInMilliseconds = dueDate - now;
        const diffInHours = Math.round(diffInMilliseconds / (1000 * 60 * 60));
        return `${diffInHours} hours`;
    };

    useEffect(() => {
        setIsLoading(true);
        Promise.all([
            fetchProblems(null, null, null, 'Leetcode', null),
            fetchUserReviewProfile()
        ])
        .then(([problemsData, reviewProfileData]) => {
            setProblems(problemsData);
            setReviewProfile(reviewProfileData);
            setIsLoading(false);
        })
        .catch(err => {
            console.error(err);
            setIsLoading(false);
        });
}, []);

    // if (isLoading) {
    //     return <div>Loading...</div>; // Or replace with your own loading component
    // }


    const handleCardSelect = (problem) => {
        setSelectedProblem(problem);
    };

    const handleBack = () => {
        setSelectedProblem(null);
    };

    const handleReview = async () => {
        try {
            // Find the problem in the reviewProfile that matches the selectedProblem
            const reviewProblem = reviewProfile.leetcode_progress.problems.find(p => p.problem_id === selectedProblem.problem_id);

            if (reviewProblem) {
                if (reviewProblem.review_cycle === -1) {
                    await markProblemForReviewCycle(selectedProblem.problem_id);
                } else if (reviewProblem.review_cycle >= 0 && reviewProblem.review_cycle <= 4) {
                    await submitProblemAttempt(selectedProblem.problem_id);
                }
            } else {
                // If the problem is not in the reviewProfile, mark it for a review cycle
                await markProblemForReviewCycle(selectedProblem.problem_id);
            }

            // Refresh the review profile after the API call
            const updatedReviewProfile = await fetchUserReviewProfile();
            setReviewProfile(updatedReviewProfile);
        } catch (error) {
            console.error(error);
        }
        handleBack()
    };

    //TODO finish this
    const filteredProblems = problems.filter(problem => {
        if (filter === 'All') return true;
        else if (filter === 'Review' && reviewProfile) {
            const reviewProblem = reviewProfile.leetcode_progress.problems.find(p => p.problem_id === problem.problem_id);
            return reviewProblem && reviewProblem.review_cycle >= 0 && reviewProblem.review_cycle <= 4;
        } else if (filter === 'Favourite' && reviewProfile) {/*return an empty we will populate this later*/
            return []
        } else {
            return false;
        }

    });

    return selectedProblem ? (
        <DetailedProblemCard problem={selectedProblem} onBack={handleBack} onReview={handleReview}/>
    ) : (
        <div className="problem-grid"
             style={{
                 display: 'grid',
                 gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                 gridGap: '1em',
                 overflowY: 'auto',
                 maxHeight: '100vh',
             }}
        >
            {
                filteredProblems.map((problem) => {
                    const reviewProblem = reviewProfile.leetcode_progress.problems.find(p => p.problem_id === problem.problem_id);
                    const dueTime = reviewProblem ? calculateDueTime(reviewProblem.next_review) : null;

                    return (
                        <ProblemCard
                            key={problem.platform_id}
                            problem={problem}
                            onCardSelect={handleCardSelect}
                            dueTime={dueTime}
                        />
                    );
                })
            }
        </div>
    );
}



export default ProblemGrid;