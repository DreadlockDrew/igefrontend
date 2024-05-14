// In ProblemGrid.js
import React, { useEffect, useState } from 'react';
import ProblemCard from './ProblemCard';
import DetailedProblemCard from './DetailedProblemCard';
import {fetchProblems, fetchUserReviewProfile, markProblemForReviewCycle,submitProblemAttempt} from '../navigation/api';
import '../../css/ProblemGrid.css';

const ProblemGrid = ({ filter }) => {
    const [problems, setProblems] = useState(
[{"_id":"65bafd68d0f2e61da343303b","title":"Two Sum","platform_id":1,"difficulty":"Easy","platform":"Leetcode","problem_id":"11126319-c80a-408f-9711-f30516e5c22c","description":"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.","url":"https://leetcode.com/problems/two-sum/description/"},{"_id":"65bafd68d0f2e61da343303c","title":"Add Two Numbers","platform_id":2,"difficulty":"Medium","platform":"Leetcode","problem_id":"e79719cb-6751-4513-bae5-e50613e9d7da","description":null},{"_id":"65bafd68d0f2e61da343303d","title":"Longest Substring Without Repeating Characters","platform_id":3,"difficulty":"Medium","platform":"Leetcode","problem_id":"1645f191-6437-4078-bf32-46f7c8888d27","description":null},{"_id":"65bafd68d0f2e61da343303e","title":"Median of Two Sorted Arrays","platform_id":4,"difficulty":"Hard","platform":"Leetcode","problem_id":"a30a40d7-5140-4da1-bf38-f44447fccf42","description":null},{"_id":"65bafd68d0f2e61da343303f","title":"Longest Palindromic Substring","platform_id":5,"difficulty":"Medium","platform":"Leetcode","problem_id":"c6b5441c-45b3-422e-902d-e4c9acd9bb8d","description":null},{"_id":"65bafd68d0f2e61da3433040","title":"Zigzag Conversion","platform_id":6,"difficulty":"Medium","platform":"Leetcode","problem_id":"d96863b1-fa24-412d-98d7-ed16f05aa437","description":null},{"_id":"65bafd68d0f2e61da3433041","title":"Reverse Integer","platform_id":7,"difficulty":"Easy","platform":"Leetcode","problem_id":"520fb530-2bcc-4d73-aced-d73e96a3fa4c","description":null},{"_id":"65bafd68d0f2e61da3433042","title":"String to Integer (atoi)","platform_id":8,"difficulty":"Medium","platform":"Leetcode","problem_id":"1f7aaf2d-0d82-43c4-90b2-6e9f195fe61e","description":null},{"_id":"65bafd68d0f2e61da3433043","title":"Palindrome Number","platform_id":9,"difficulty":"Easy","platform":"Leetcode","problem_id":"6bfecc8f-40e1-410e-8bae-a56f3db91763","description":null},{"_id":"65bafd68d0f2e61da3433044","title":"Regular Expression Matching","platform_id":10,"difficulty":"Hard","platform":"Leetcode","problem_id":"43a9a02e-5001-4c55-a5d0-aedc3bb85c50","description":null},{"_id":"65bafd68d0f2e61da3433045","title":"Container With Most Water","platform_id":11,"difficulty":"Medium","platform":"Leetcode","problem_id":"96556baf-fa38-4b58-8f88-1db5ad503b4e","description":null},{"_id":"65bafd68d0f2e61da3433046","title":"Integer to Roman","platform_id":12,"difficulty":"Medium","platform":"Leetcode","problem_id":"6d23fb8c-7de2-4eed-92e0-22196f6328b5","description":null},{"_id":"65bafd68d0f2e61da3433047","title":"Roman to Integer","platform_id":13,"difficulty":"Easy","platform":"Leetcode","problem_id":"77b65ea3-897c-49f3-a9cd-caa1473b5ca3","description":null},{"_id":"65bafd68d0f2e61da3433048","title":"Longest Common Prefix","platform_id":14,"difficulty":"Easy","platform":"Leetcode","problem_id":"8fcc5f01-74af-4766-b10a-5828a78e5b9e","description":null},{"_id":"65bafd68d0f2e61da3433049","title":"3Sum","platform_id":15,"difficulty":"Medium","platform":"Leetcode","problem_id":"335e3018-59f7-433b-a9d1-5b767255ddf3","description":null},{"_id":"65bafd68d0f2e61da343304a","title":"Letter Combinations of a Phone Number","platform_id":16,"difficulty":"Medium","platform":"Leetcode","problem_id":"37c36a53-5b0e-49a2-ad48-73338258fb96","description":null},{"_id":"65bafd68d0f2e61da343304b","title":"4Sum","platform_id":17,"difficulty":"Medium","platform":"Leetcode","problem_id":"e9d5b4da-d4c7-46a0-bf1d-6eca5bfc4c99","description":null},{"_id":"65bafd68d0f2e61da343304c","title":"Remove Nth Node From End of List","platform_id":18,"difficulty":"Medium","platform":"Leetcode","problem_id":"57ec871a-8280-4057-b0ff-7a7968cd857b","description":null},{"_id":"65bafd68d0f2e61da343304d","title":"Valid Parentheses","platform_id":19,"difficulty":"Easy","platform":"Leetcode","problem_id":"42b80e21-99c7-46c9-a04b-5d244c82ed90","description":null},{"_id":"65bafd68d0f2e61da343304e","title":"Merge Two Sorted Lists","platform_id":20,"difficulty":"Easy","platform":"Leetcode","problem_id":"5d644e5c-ad44-45ef-9045-8fa4358a0ac4","description":null}]
    );
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

//     useEffect(() => {
//         setIsLoading(true);
//         Promise.all([
//             fetchProblems(null, null, null, 'Leetcode', null),
//             fetchUserReviewProfile()
//         ])
//         .then(([problemsData, reviewProfileData]) => {
//             setProblems(problemsData);
//             setReviewProfile(reviewProfileData);
//             setIsLoading(false);
//         })
//         .catch(err => {
//             console.error(err);
//             setIsLoading(false);
//         });
// }, []);

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
        <div className="problem-grid">
            {
                problems.map((problem) => {
                    // const reviewProblem = reviewProfile.leetcode_progress.problems.find(p => p.problem_id === problem.problem_id);
                    const dueTime = problem ? calculateDueTime(problem.next_review) : null;

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