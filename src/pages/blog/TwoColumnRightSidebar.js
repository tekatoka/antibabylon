import React from 'react';
import Header from "../../components/header/HeaderOne";
import TemplateBlogWithSidebar from "../../templates/blog/BlogWithSidebar";
import SideHeader from "../../components/SideHeader";

const BlogTwoColumnRightSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateBlogWithSidebar
                blogColumnClass={'col-md-6 col-12'}
                sidebarPosition="right"
                showPostsPerPage={6}
            />
        </div>
    );
};

export default BlogTwoColumnRightSidebarPage;