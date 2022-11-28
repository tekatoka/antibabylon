import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import socials from '../../data/social-networks';
import GalleryGrid from '../../components/gallery';

const BlogDetailsContent = ({ title, meta, gallery, excerpt, info, description, olderPost, newerPost }) => {

    return (
        <Fragment>
            <div className="blog-content">

                <h2 className="blog-title">{title}</h2>

                <ul className="blog-meta">
                    <li>
                        <i className="fa fa-calendar" style={{ margin: "0 10px 0 0" }} />{meta.postDate}&nbsp;&nbsp;&nbsp;| <i className="fa fa-user" style={{ margin: "0 10px" }} />{meta.author}
                    </li>
                </ul>

                <div className="blog-desc">
                    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                    {info && <p className='info' dangerouslySetInnerHTML={{ __html: info }} />}
                    <p dangerouslySetInnerHTML={{ __html: description }} />

                    {gallery &&
                        <div className="gallery mt-30 mb-30">
                            <GalleryGrid images={gallery} />
                        </div>
                    }
                </div>

            </div>

            <div className="blog-footer col-12 pl-0 pr-0 fix">
                <div className="row">
                    <div
                        className="blog-social-share d-flex justify-content-center col-md-6 col-12 order-1 order-md-2 mb-xs-20">
                        {socials.map(social => (
                            <a key={social.id} href={`${social.url}`} target="_blank" rel="noopener noreferrer">
                                <i className={`fa fa-${social.media}`} />
                            </a>
                        ))}
                    </div>

                    <div className="d-flex justify-content-start col-md-3 col-6 order-2 order-md-1">
                        {olderPost && <Link to={`${process.env.PUBLIC_URL + '/blog/' + olderPost.slug}`} className="post-nav old-post">
                            <i className="fa fa-long-arrow-left" />Older
                        </Link>}
                    </div>

                    <div className="d-flex justify-content-end col-md-3 col-6 order-3">
                        {newerPost && <Link to={`${process.env.PUBLIC_URL + '/blog/' + newerPost.slug}`} className="post-nav new-post">
                            <i className="fa fa-long-arrow-right" />Next
                        </Link>}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BlogDetailsContent;