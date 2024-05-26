import React from 'react';
import '../css/HomePage.css'
const HomePage = () => (
    <div className="home-page-body">
        <div className="hero-bg">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <h2>Some sort of snazzy text here!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adip e</p>
                    <a className="button">Call to Action</a>
                </div>
                <section className='inner-hero-flex'>
                    <div className="inner-hero-section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el aspect</p>
                    </div>
                    <div className="inner-hero-section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el aspect</p>
                    </div>
                    <div className="inner-hero-section">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <h2>Benefits</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing el aspect</p>
                    </div>
                </section>
            </div>
        </div>
        <div id="call-to-action" className="homepage-tab">
            <img src="images/pexels-markusspiske-330771.webp" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <div className="homepage-text-container">
                    <h3>Ready to snag that tech job?</h3>
                    <p>Hone your interview skills with spaced
                        repetition and personalized study plans.
                        Practice effectively and efficiently
                        to ace your next interview!</p>
                </div>
            </div>
        </div>

        <div id="learn-by-topic" className="homepage-tab">
            <img src="images/pexels-pixabay-2156.webp" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <div className="homepage-text-container">
                    <h3>Don't know where to start?</h3>
                    <p>Learn by topic! Dive into our guided study plans to master common interview topics.
                        Progress to advanced subjects and earn completion badges along the way.</p>
                </div>
            </div>
        </div>

        <div id="pricing-options" className="homepage-tab">
            <img src="images/1024px-Good_Morning_From_the_International_Space_Station.webp" alt="Descriptive text here"/>
            <div className="hpt-textfield">
                <div className="homepage-text-container">
                   <h3>Checkout our many courses!</h3>
                    <p>Learn by topic! Dive into our guided study plans to master common interview topics.
                    Progress to advanced subjects and earn completion badges along the way.</p>
                </div>
            </div>
        </div>


    </div>
);
export default HomePage;