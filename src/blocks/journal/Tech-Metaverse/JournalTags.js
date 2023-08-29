import React from 'react';

const JournalTags = () => {
    return (
        <div className="tags">
            <p>
                <span className="tags-title">Tags:</span>
                <a title="metaverse" href={ process.env.PUBLIC_URL + "/journal" }>Metaverse</a>
                <span>,</span>
                <a title="Internet" href={ process.env.PUBLIC_URL + "/journal" }>Internet</a>
                <span>,</span>
                <a title="VR" href={ process.env.PUBLIC_URL + "/journal" }>VR</a>
                <span>,</span>
                <a title="meta" href={ process.env.PUBLIC_URL + "/journal" }>Meta</a>
            </p>
        </div>
    );
};

export default JournalTags;
