import React from 'react';
import 'perfect-scrollbar-react/dist/style.min.css';

const PageContainer = ({ children, classes, fullWidth }) => {

    return (
        <div className={`content-body section ${classes}`}>
            <div className={`section-wrap section ${!fullWidth ? 'section-padding' : null}`}>
                {children}
            </div>
        </div>
    );
};

export default PageContainer;