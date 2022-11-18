import React from 'react';
import posts from '../../data/blog';
import Blog from "../../components/blog";
import { Container, Row, Col } from 'react-bootstrap'
import PageContainer from "../../container/CustomPage";

const TemplateBlogWithoutSidebar = ({ blogColumnClass }) => {
    const orderedPosts = posts.sort((a, b) => b.id - a.id);
    return (
        <PageContainer classes={'bg-grey'}>
            <Container>
                <Row className="blog-content-wrap">
                    {orderedPosts.map(blog => (
                        <Col key={blog.id} className={blogColumnClass}>
                            <Blog
                                title={blog.title}
                                slug={blog.slug}
                                thumb={blog.thumb}
                                excerpt={blog.excerpt}
                                postDate={blog.meta.postDate}
                                author={blog.meta.author}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </PageContainer>
    );
};

export default TemplateBlogWithoutSidebar;