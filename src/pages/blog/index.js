import React from 'react';
import TemplateBlogWithoutSidebar from "../../templates/blog/BlogWithoutSidebar";
import { Layout } from '../../Layout';

const BlogPage = () => {
    return (
        <Layout>
            <TemplateBlogWithoutSidebar blogColumnClass={'col-12 col-lg-4 col-md-6'} />
        </Layout>
    );
};

export default BlogPage;
