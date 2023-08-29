import React from 'react';

const WidgetCategories = () => {
    return (
        <div id="categories-2" className="widget widget_categories">
            <h5 className="widget-title">Categories</h5>

            <ul>
                <li className="cat-item">
                    <a title="UX Research" href={ process.env.PUBLIC_URL + "/journal" }>UX Research</a>
                </li>

                <li className="cat-item">
                    <a title="Technology" href={ process.env.PUBLIC_URL + "/journal" }>Technology</a>
                </li>

                <li className="cat-item">
                    <a title="UI/UX Design" href={ process.env.PUBLIC_URL + "/journal" }>UI/UX Design</a>
                </li>

                <li className="cat-item">
                    <a title="Educational" href={ process.env.PUBLIC_URL + "/journal" }>Educational</a>
                </li>

            </ul>
        </div>
    );
};

export default WidgetCategories;
