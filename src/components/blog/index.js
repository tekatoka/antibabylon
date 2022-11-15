import React from 'react';
import { Link } from 'react-router-dom'

const Blog = ({ title, slug, thumb, excerpt, postDate, author }) => {
    return (
        <div className="blog-item">
            <div className="blog-image">
                <Link to={`${process.env.PUBLIC_URL + '/blog/' + slug}`}>
                    <img src={require('../../assets/images/' + thumb)} alt={title} />
                </Link>
            </div>

            <div className="blog-content">
                <h4 className="blog-title">
                    <Link to={`${process.env.PUBLIC_URL + '/blog/' + slug}`}>{title}</Link>
                </h4>

                <ul className="blog-meta">
                    <li>{postDate} | by {author}</li>
                </ul>

                <div className="blog-desc">
                    <p>{excerpt}</p>
                </div>

                <div className="read-more">
                    <Link to={`${process.env.PUBLIC_URL + '/blog/' + slug}`}>READ MORE...</Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;