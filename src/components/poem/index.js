import React from 'react';

const Poem = ({ text, title, subtitle, author, titleColor }) => {
    return (
        <>
            <div className={`poem-title ${titleColor} mt-30`}>{title}</div>
            {subtitle && <div className='poem-subtitle mb-10'>{subtitle}</div>}
            <div className='poem-author mb-30'>{author}</div>
            <div
                className='mt-20'
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </>
    );
};

export default Poem;
