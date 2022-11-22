import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import PageContainer from "../../container/CustomPage";
import SidebarBlog from "../../container/sidebar";
import BlogDetailsPreviewImage from "./PreviewImage";
import BlogDetailsContent from "./Content";
import posts from '../../data/blog/';
import Error404 from '../../components/error';

const TemplateBlogDetails = ({ sidebar, sidebarPosition, slug }) => {
    const post = posts.find(p => p.slug === slug);
    const olderPost = post ? posts.find(p => p.id === post.id - 1) : null;
    const newerPost = post ? posts.find(p => p.id === post.id + 1) : null;
    return (
        post ?
            <PageContainer classes={'bg-grey'}>
                <Container>
                    <Row>
                        <Col xl={!sidebar ? 12 : 9} lg={!sidebar ? 12 : 8}
                            className={`mb-50 ${sidebarPosition === 'left' ? 'order-1 order-lg-2' : ''}`}
                        >
                            <div className='blog-item-details'>
                                <BlogDetailsPreviewImage img={post.thumb} />

                                <Row>
                                    <Col lg={!sidebar ? 9 : 12} className="m-auto">
                                        <BlogDetailsContent
                                            title={post.title}
                                            meta={post.meta}
                                            excerpt={post.excerpt}
                                            info={post.info}
                                            description={post.description}
                                            gallery={post.gallery}
                                            olderPost={olderPost}
                                            newerPost={newerPost}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        {sidebar && (
                            <Col xl={3} lg={4} className={`${sidebarPosition === 'left' ? 'order-2 order-lg-1' : ''}`}>
                                <SidebarBlog currentPostId={post.id} />
                            </Col>
                        )}
                    </Row>
                </Container>
            </PageContainer> : <Error404 />
    );
};

TemplateBlogDetails.defaultProps = {
    sidebar: true,
    sidebarPosition: "left"
}

export default TemplateBlogDetails;