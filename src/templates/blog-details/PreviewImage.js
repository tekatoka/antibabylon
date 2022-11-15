import React from 'react';

const BlogDetailsPreviewImage = ({ img, title }) => {
    return (
        <div className="blog-image">
            <img src={require('../../assets/images/' + img)} alt={title} title={title} />
        </div>
    );
};

export default BlogDetailsPreviewImage;