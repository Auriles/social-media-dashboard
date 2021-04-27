import React, { Component, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/theme';
import Toggle from '../modules/toggle';
import { GlobalStyles } from '../../global';

// The function that toggles between themes
function HomeComponent() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Return the layout based on the current theme
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <div className="home-component">
                <GlobalStyles />

                <div className="top-dashboard">
                    <div className="count">
                        <p>Social Media Dashboard</p>
                        <p>Total Followers: 23,004</p>
                    </div>
                    <div className="toggle">
                        <p> {theme === 'light' ? 'Light Theme' : 'Dark Theme'} </p>
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>

                <div className="social-media">
                    {/* FACEBOOK CARD */}
                    <div className="card facebook-card">
                        <div className="name">
                            <i class="fab fa-facebook-square"></i>
                            <p>@nathanf</p>
                        </div>
                        <div className="followers">
                            <p>1987</p>
                            <p>Followers</p>
                        </div>
                        <div className="period">
                            <i class="fas fa-sort-up"></i>
                            <p>12 Today</p>
                        </div>
                    </div>

                    {/* TWITTER CARD */}
                    <div className="card twitter-card">
                        <div className="name">
                            <i class="fab fa-twitter"></i>
                            <p>@nathanf</p>
                        </div>
                        <div className="followers">
                            <p>1044</p>
                            <p>Followers</p>
                        </div>
                        <div className="period">
                            <i class="fas fa-sort-up"></i>
                            <p>99 Today</p>
                        </div>
                    </div>

                    {/* INSTAGRAM CARD */}
                    <div className="card instagram-card">
                        <div className="instagram-border"></div>
                        <div className="instagram-name">
                            <p><i class="fab fa-instagram"></i></p>
                            <p>@nathanf</p>
                        </div>
                        <div className="instagram-followers">
                            <p>11k</p>
                            <p>Followers</p>
                        </div>
                        <div className="instagram-period">
                            <i class="fas fa-sort-up"></i>
                            <p>1099 Today</p>
                        </div>
                    </div>

                    {/* YOUTUBE CARD */}
                    <div className="card youtube-card">
                        <div className="name">
                            <p><i class="fab fa-youtube"></i></p>
                            <p>Nathan F.</p>
                        </div>
                        <div className="followers">
                            <p>8239</p>
                            <p>Subscribers</p>
                        </div>
                        <div className="period reverse">
                            <i class="fas fa-sort-down"></i>
                            <p>144 Today</p>
                        </div>
                    </div>

                </div>

                <div className="overview-top">

                    {/* FACEBOOK CARD OVERVIEW 1 */}
                    <div className="facebook-page-views">
                        <div className="card-top">
                            <p>Page Views</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>87</p>
                            <p>3%</p>
                        </div>
                    </div>

                    {/* FACEBOOK CARD OVERVIEW 2 */}
                    <div className="facebook-likes">
                        <div className="card-top">
                            <p>Likes</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>52</p>
                            <p>2%</p>
                        </div>
                    </div>

                    {/* INSTAGRAM CARD OVERVIEW 1 */}
                    <div className="instagram-likes">
                        <div className="card-top">
                            <p>Likes</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>5462</p>
                            <p>2257%</p>
                        </div>
                    </div>

                    {/* INSTAGRAM CARD OVERVIEW 2 */}
                    <div className="instagram-profile-views">
                        <div className="card-top">
                            <p>Profile Views</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>52k</p>
                            <p>1375%</p>
                        </div>
                    </div>

                </div>

                <div className="overview-bottom">

                    {/* TWITTER CARD OVERVIEW 1 */}
                    <div className="twitter-retweets">
                        <div className="card-top">
                            <p>Retweets</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>117</p>
                            <p>303%</p>
                        </div>
                    </div>

                    {/* TWITTER CARD OVERVIEW 2 */}
                    <div className="twitter-likes">
                        <div className="card-top">
                            <p>Likes</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>507</p>
                            <p>553%</p>
                        </div>
                    </div>

                    {/* YOUTUBE CARD OVERVIEW 1 */}
                    <div className="youtube-likes">
                        <div className="card-top">
                            <p>Likes</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>107</p>
                            <p>19%</p>
                        </div>
                    </div>

                    {/* YOUTUBE CARD OVERVIEW 2 */}
                    <div className="youtube-total-views">
                        <div className="card-top">
                            <p>Total Views</p>
                            <p>Icon</p>
                        </div>
                        <div className="card-bottom">
                            <p>1407</p>
                            <p>12%</p>
                        </div>
                    </div>

                </div>

            </div>
        </ThemeProvider>
    );
}

export default HomeComponent;