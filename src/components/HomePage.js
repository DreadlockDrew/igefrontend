import React from 'react';
import '../css/HomePage.css'
const HomePage = () => (
    <div className="home-page-body">
        <div id="call-to-action" className="homepage-tab">
            <img src="images/blockyCity.png" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <h3>Ready to snag that tech job?</h3>
                <p>Hone your interview skills with spaced
                    repetition and personalized study plans.
                    Practice effectively and efficiently
                    to ace your next interview!</p>
            </div>
        </div>

        <div id="learn-by-topic" className="homepage-tab">
            <img src="images/blockyCity2.png" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <h3>Don't know where to start?</h3>
                <p>Learn by topic! Dive into our guided study plans to master common interview topics.
                    Progress to advanced subjects and earn completion badges along the way.</p>
            </div>
        </div>

        <div id="pricing-options" className="homepage-tab">
            <img src="images/blockyCity3.png" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <h3>Checkout our many courses!</h3>
                <p>Learn by topic! Dive into our guided study plans to master common interview topics.
                    Progress to advanced subjects and earn completion badges along the way.</p>
            </div>
        </div>


    </div>
);
export default HomePage;