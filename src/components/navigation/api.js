import axios from 'axios';
//TODO it might be a good idea to quickly pipe all responses through a function that can invoke redirects to certain pages.
async function login(username, password) {
    try {
        console.log('Starting authentication request');
        const response = await axios.post('/auth/login', {
            username: username,
            password: password,
        });

        if (response.status === 200) {
            // Store tokens in localStorage
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            return response.data;
        } else {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }

    } catch (error) {
        console.log("Server Response Status was "+error.response.status)
        console.log("Server Response Data: "+error.response.data)
        console.log("Axios Message: "+error.message);
        console.log("Axios Error Stack: "+error.stack);
        throw error;
    }
}

async function logout() {
    try {
        // Get tokens from localStorage
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        // Attempt logout on the server
        await axios.post('/auth/logout',{
            accessToken,
            refreshToken
        });



    } catch (error) {
        console.log(error.response.status)
        console.log(error.response.data)
        console.log(error.message);
        console.log(error.stack);
        throw error;
    }
    finally {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.clear();

    }
}

async function myAccount()
{
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        return await axios.get('/api/accounts/account_details', { headers });
    } catch (error) {
        console.log(error.response.status)
        console.log(error.response.data)
        console.log(error.message);
        console.log(error.stack);
        throw error;
    }
}


// Function to fetch problems from the server
async function fetchProblems(start, end, difficulty, platform, title) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        const response = await axios.get('/api/problems', {
            params: {
                start: start,
                end: end,
                difficulty: difficulty,
                platform: platform,
                title: title
            },
            headers : headers
        });

        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }

        return response.data;
    }
    catch (error) {
        console.log("Server Response Status was "+error.response.status)
        console.log("Server Response Data: "+error.response.data)
        console.log("Axios Message: "+error.message);
        console.log("Axios Error Stack: "+error.stack);
        throw error;
    }
}

async function createUserReviewProfile() {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        const response = await axios.post('/api/review/create_user_review_profile', {}, {headers});
        if (response.status !== 201) {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.log("Server Response Status was " + error.response.status)
        console.log("Server Response Data: " + error.response.data)
        console.log("Axios Message: " + error.message);
        console.log("Axios Error Stack: " + error.stack);
        throw error;

    }
}
// Function to fetch user review profile from the server
async function fetchUserReviewProfile() {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        const response = await axios.get('/api/review/get_user_review_profile', { headers });

        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }

        return response.data || {};
    }
    catch (error) {
        console.log("Server Response Status was "+error.response.status)
        console.log("Server Response Data: "+error.response.data)
        console.log("Axios Message: "+error.message);
        console.log("Axios Error Stack: "+error.stack);
        throw error;
    }
}

async function markProblemForReviewCycle(problem_id) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        const response = await axios.post('/api/review/mark_problem_for_review_cycle', { problem_id }, { headers });

        if (response.status !== 201) {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }

        return response.data;
    }
    catch (error) {
        console.log("Server Response Status was "+error.response.status)
        console.log("Server Response Data: "+error.response.data)
        console.log("Axios Message: "+error.message);
        console.log("Axios Error Stack: "+error.stack);
        throw error;
    }
}

// Function to submit a problem attempt
async function submitProblemAttempt(problem_id) {
    try {
        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        };
        const response = await axios.post('/api/review/submit_problem_attempt', { problem_id }, { headers });

        if (response.status !== 200) {
            throw new Error(`Server responded with status code ${response.status}: ${response.statusText}`);
        }

        return response.data;
    }
    catch (error) {
        console.log("Server Response Status was "+error.response.status)
        console.log("Server Response Data: "+error.response.data)
        console.log("Axios Message: "+error.message);
        console.log("Axios Error Stack: "+error.stack);
        throw error;
    }
}



export { login, logout , myAccount ,fetchProblems,fetchUserReviewProfile,markProblemForReviewCycle,submitProblemAttempt ,createUserReviewProfile};