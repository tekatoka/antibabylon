import React from 'react';
import Header from "../../components/header/HeaderOne";
import TemplateBlogDetails from "../../templates/blog-details";
import SideHeader from "../../components/SideHeader";

const BlogDetailsWithoutSidebar = () => {
    return (
        <div>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateBlogDetails sidebar={false} />
        </div>
    );
};

export default BlogDetailsWithoutSidebar;