import React, { useEffect } from 'react';
import GitHubCalendar from 'github-calendar';
import "../styles.css"


const GithubCalender = ({ username }) => {
    useEffect(() => {
      // Initialize the GitHub Calendar library
      GitHubCalendar('.calendar', username, {
        summary_text: 'Contributions in the last year',
        level_colors: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], // Custom colors
      });
    }, [username]);
  
    return (
      <div className="github-contributions">
        <div className="calendar"></div>
      </div>
    );
  };
  
  export default GithubCalender;