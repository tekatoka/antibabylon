import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PandaLogo from "../../assets/images/partners/panda.svg";

const ProjectInfo = () => {
    return (
        <div id="project-info" className="section">
            <div className="section-wrap section pt-60 pt-xs-50 pb-60 pb-lg-60 pb-md-60 pb-sm-60 pb-xs-50 mb-0">
                <Container>
                    <Row className={'text-left d-table'}>
                        <Col xs={3} className={"d-table-cell"}>
                            <img src={PandaLogo} style={{ maxWidth: "250px" }} alt={"PANDA platforma"} title={"PANDA platforma"} />
                        </Col>
                        <Col xs={9} className={'mb-40 mb-xs-30 text-500 text-medium d-table-cell'}>
                            The project was initiated by the Berlin-based NGO “PANDA platforma” with the support of the German Ministry of Foreign Affairs
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProjectInfo;