import React from 'react';
import './Skills.css';
export default function Skills() {
    return (
        <div className="skills-bar">
            <div className="skills-tag">
                <h3>SKILLS</h3>
            </div>
            <div className="bar">
                <div className="info">
                    <span>C++/C</span>
                </div>
                <div className="progress-line C"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>JAVA</span>
                </div>
                <div className="progress-line JAVA"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>PYTHON</span>
                </div>
                <div className="progress-line PYTHON"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>DJANGO FRAMEWORK</span>
                </div>
                <div className="progress-line DJANGO"><span></span></div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>REACT JS</span>
                </div>
                <div className="progress-line REACT"><span></span></div>
            </div>
        </div>

    )
}
