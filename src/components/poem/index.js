import React from 'react';

const Poem = ({ poem, author, titleColor }) => {
    return (
        <>
            <div className={`poem-title ${titleColor} mt-30`}>{poem.title}</div>
            {poem.subtitle && <div className='poem-subtitle mb-10'>{poem.subtitle}</div>}
            <div className='poem-author mb-30'>{author}</div>
            <div
                className='mt-20'
                dangerouslySetInnerHTML={{ __html: poem.text }}
            />
        </>
    );
};

export default Poem;
