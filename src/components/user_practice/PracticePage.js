
import PracticeNavBar   from './PracticeNavBar';
import ProblemGrid from './ProblemGrid';
import SearchBar from './GridQuestionSearch';
import {useState, useEffect} from "react";
import { createUserReviewProfile,fetchUserReviewProfile, markProblemForReviewCycle, submitProblemAttempt } from '../navigation/api';
import withAuth from "../navigation/withAuth";


export function useUserReviewProfile() {
    const [reviewProfile, setReviewProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUserReviewProfile()
            .then(reviewProfileData => {
                setReviewProfile(reviewProfileData);
                setIsLoading(false);
            })

            .catch(err => {
                console.log(err);
                if (err.response && err.response.status === 404) {
                    // User does not have a profile, set reviewProfile to default value
                    setReviewProfile({});
                    createUserReviewProfile()
                        .then(newProfileData => {
                            setReviewProfile(newProfileData);
                            setIsLoading(false);
                        })
                        .catch(err => {
                            console.error(err);
                            setIsLoading(false);
                        });
                } else {
                    console.error(err);
                }

                setIsLoading(false);
            });
    }, []);

    const handleReview = async (problem_id) => {
        try {
            const reviewProblem = reviewProfile.leetcode_progress.problems.find(p => p.problem_id === problem_id);

            if (reviewProblem) {
                if (reviewProblem.review_cycle === -1) {
                    await markProblemForReviewCycle(problem_id);
                } else if (reviewProblem.review_cycle >= 0 && reviewProblem.review_cycle <= 4) {
                    await submitProblemAttempt(problem_id);
                }
            } else {
                await markProblemForReviewCycle(problem_id);
            }

            const updatedReviewProfile = await fetchUserReviewProfile();
            setReviewProfile(updatedReviewProfile);
        } catch (error) {
            console.error(error);
        }
    };

    return { reviewProfile, isLoading, handleReview };
}

const PracticePage = () => {
    const [filter, setFilter] = useState('All');
    const { reviewProfile, isLoading, handleReview } = useUserReviewProfile();

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <PracticeNavBar onFilterSelect={setFilter}/>
            <div style={{display: 'flex', flexDirection: 'column', width: "100%"}}>
                {/*<SearchBar /> */}
                <ProblemGrid filter={filter} reviewProfile={reviewProfile} onReview={handleReview}/>
            </div>
        </div>
    );
};


export default withAuth(PracticePage);