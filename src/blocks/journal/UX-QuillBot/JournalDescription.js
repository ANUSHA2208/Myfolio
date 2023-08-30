import React from 'react';
import design_process from '../../../assets/journalImages/QuillBot/quillbot-design_process.png'
import userflow from '../../../assets/journalImages/QuillBot/quillbot-flow.png'
import ui from '../../../assets/journalImages/QuillBot/high-fidelity-wireframes.png'

const JournalDescription = () => {
    return (
        <div className="description">
            <h5 style={{color:'black'}}>1. Project Overview</h5>
            <p>Quillbot is an AI-powered paraphrasing tool that helps users rewrite and rephrase sentences, paragraphs, or whole articles.This case study is based on this tool.</p>

            <h5 style={{color:'black'}}>2. Problem statement</h5>
            <p>The Quillbot has a challenge in meeting the needs of users who prefer to access the service on their mobile devices. While Quillbot offers a web-based platform, there is currently no dedicated mobile application available. This limitation poses a problem for users who require the convenience and accessibility of a mobile app to utilize Quillbot’s services on the go.</p>
            <blockquote>Goal : to design a Quillbot mobile app so that people have access easily through mobile also.</blockquote>

            <h5 style={{color:'black'}}>3. Design Process</h5>
            <img src={design_process} alt='design process'/>

            <h5 style={{color:'black'}}>4. User Flow</h5>
            <img src={userflow} alt="quillbot userflow"/>

            
            <h5 style={{color:'black'}}>5. High fidelity wireframes</h5>
            <p><img src={ui} alt="high fidelity wireframes"/></p>

              
            <h5 style={{color:'black'}}>6. Prototype</h5>
            <p><a href='https://www.figma.com/proto/AynUoAqL8Zl2G0mjgyC3Au/Quillbot-mobile-app?page-id=1%3A43&type=design&node-id=9-20&viewport=544%2C280%2C0.16&t=5kl076H6bnMEamwm-1&scaling=scale-down&starting-point-node-id=1%3A70&show-proto-sidebar=1&mode=design'>Figma Link</a></p>
            
            <h5 style={{color:'black'}}>Conclusion</h5>
            <p>By showcasing this comprehensive case study, I aim to demonstrate my expertise in user-centered design, research methodologies, iterative prototyping, and visual design.Hope you guys like it.</p>
            <span>Thank You.</span>
        </div>
    );
};

export default JournalDescription;
