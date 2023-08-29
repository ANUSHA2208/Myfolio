import React from 'react';

const JournalTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="UX Research" href={ process.env.PUBLIC_URL + "/journal" }>UX Research</a>
                <span>,</span>
                <a title="Banking App" href={ process.env.PUBLIC_URL + "/journal" }>Banking App</a>
                <span>,</span>
                <a title="UI/UX Design" href={ process.env.PUBLIC_URL + "/journal" }>UI/UX Design</a>
                <span>,</span>
                <a title="Redesign" href={ process.env.PUBLIC_URL + "/journal" }>Redesign</a>
            </p>
        </div>
    );
};

export default JournalTags;
