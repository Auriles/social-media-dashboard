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

                        {/* INSTAGRAM CARD */}
                    <div className="instagram-card">
                        <div className="instagram-name">
                            <p>logo</p>
                            <p>@nathanf</p>
                        </div>
                        <div className="instagram-count">
                            <p>11k</p>
                            <p>Followers</p>
                        </div>
                        <div className="instagram-period">
                            <p>1099 Today</p>
                        </div>
                    </div>

                        {/* YOUTUBE CARD */}
                    <div className="youtube-card">
                        <div className="youtube-name">
                            <p>logo</p>
                            <p>Nathan F.</p>
                        </div>
                        <div className="youtube-count">
                            <p>8239</p>
                            <p>Subscribers</p>
                        </div>
                        <div className="youtube-period">
                            <p>144 Today</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default HomeComponent;