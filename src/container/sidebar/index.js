import React, { Fragment } from 'react';
import Sidebar from "../../components/sidebar";
import banner from '../../assets/images/banner/banner-1.jpg'

import posts from '../../data/blog';

const SidebarBlog = ({ currentPostId }) => {
    const orderedPosts = posts.filter(p => p.id !== currentPostId).sort((a, b) => b.id - a.id);
    return (
        <Fragment>
            <Sidebar title={"Other posts"}>
                <ul className="sidebar-post">
                    {orderedPosts.map(post => (
                        <li key={post.id}>
                            <a href={process.env.PUBLIC_URL + "/blog/" + post.slug}>{post.title}</a>
                            <span>{post.meta.postDate}</span>
                        </li>
                    ))}
                </ul>
            </Sidebar>

            <Sidebar>
                <div className="sidebar-banner">
                    <a href="/"><img src={banner} alt="banner" /></a>
                </div>
            </Sidebar>
        </Fragment>
    );
};

export default SidebarBlog;