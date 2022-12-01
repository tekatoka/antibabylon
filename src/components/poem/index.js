import React from 'react';

const Poem = ({ poem, translation = false, author, titleColor }) => {
    return (
        <>
            <div className={`poem-title ${titleColor} mt-30`}>{translation ? poem.titleTranslated : poem.title}</div>
            {poem.subtitle && <div className='poem-subtitle mb-10'>{translation ? poem.subtitleTranslated : poem.subtitle}</div>}
            <div className='poem-author mb-30'>{author}</div>
            <div
                className='mt-20'
                dangerouslySetInnerHTML={{ __html: translation ? poem.textTranslated : poem.text }}
            />
        </>
    );
};

export default Poem;
