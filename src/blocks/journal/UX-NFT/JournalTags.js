import React from 'react';

const JournalTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="UX Research" href={ process.env.PUBLIC_URL + "/journal" }>UX Research</a>
                <span>,</span>
                <a title="Case Study" href={ process.env.PUBLIC_URL + "/journal" }>Case Study</a>
                <span>,</span>
                <a title="UX/UI Design" href={ process.env.PUBLIC_URL + "/journal" }>UX/UI Design</a>
                <span>,</span>
                <a title="Web3 Design" href={ process.env.PUBLIC_URL + "/journal" }>Web3 Design</a>
            </p>
        </div>
    );
};

export default JournalTags;
