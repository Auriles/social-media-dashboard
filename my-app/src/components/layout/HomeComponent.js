import React, { Component } from 'react';

class HomeComponent extends Component {
    render() {
        return (
            <div className="home-component">

                <div className="top-dashboard">
                    <div className="count">
                        <p>Social Media Dashboard</p>
                        <p>Total Followers: 23,004</p>
                    </div>

                    <div className="toggle-mode">
                        <p>Dark Mode</p>
                    </div>
                </div>

                <div className="social-media">

                        {/* FACEBOOK CARD */}
                    <div className="facebook-card">
                        <div className="facebook-name">
                            <p>logo</p>
                            <p>@nathanf</p>
                        </div>
                        <div className="facebook-count">
                            <p>1987</p>
                            <p>Followers</p>
                        </div>
                        <div className="facebook-period">
                            <p>12 Today</p>
                        </div>
                    </div>

                        {/* TWITTER CARD */}
                    <div className="twitter-card">
                        <div className="twitter-name">
                            <p>logo</p>
                            <p>@nathanf</p>
                        </div>
                        <div className="twitter-count">
                            <p>1044</p>
                            <p>Followers</p>
                        </div>
                        <div className="twitter-period">
                            <p>99 Today</p>
                        </div>
                    </div>

                        {/* TWITTER CARD */}
                    <div className="instagram-card">
                        <div className="twitter-name">
                            <p>logo</p>
                            <p>@nathanf</p>
                        </div>
                        <div className="twitter-count">
                            <p>1044</p>
                            <p>Followers</p>
                        </div>
                        <div className="twitter-period">
                            <p>99 Tolkkkkkkkkkday</p>
                        </div>
                    </div>

                    <div className="youtube-card">
                        <p>Youtube</p>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomeComponent;