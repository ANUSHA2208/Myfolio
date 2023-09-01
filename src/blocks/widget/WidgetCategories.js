import React from 'react';

const WidgetCategories = () => {
    return (
        <div id="categories-2" className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>

            <ul>
                <li className="cat-item">
                    <a title="UX Research" href={ process.env.PUBLIC_URL + "/ux-research" }>UX Research</a>
                </li>

                <li className="cat-item">
                    <a title="Technology" href={ process.env.PUBLIC_URL + "/technology" }>Technology</a>
                </li>

                <li className="cat-item">
                    <a title="UI/UX Design" href={ process.env.PUBLIC_URL + "/ux-ui-design" }>UI/UX Design</a>
                </li>

                <li className="cat-item">
                    <a title="Educational" href={ process.env.PUBLIC_URL + "/educational" }>Educational</a>
                </li>

            </ul>
        </div>
    );
};

export default WidgetCategories;
