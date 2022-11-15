import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TemplateBlogDetails from "../../templates/blog-details";
import { Layout } from '../../Layout';

const BlogDetailsPage = () => {
    const { slug } = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug])
    return (
        <Layout>
            <TemplateBlogDetails sidebarPosition={"right"} slug={slug} />
        </Layout>
    );
};

export default BlogDetailsPage;