import React from 'react';
import Header from "../../components/header/HeaderOne";
import TemplateBlogDetails from "../../templates/blog-details";
import SideHeader from "../../components/SideHeader";

const BlogDetailsRightSidebarPage = () => {
    return (
        <div>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateBlogDetails sidebarPosition="right" />
        </div>
    );
};

export default BlogDetailsRightSidebarPage;