import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../assets/images/hero/slider-1.jpg";
import Slide2 from "../../../src/assets/images/hero/slider-2.jpg";
import Slide3 from "../../../src/assets/images/hero/slider-3.jpg";
import Slide4 from "../../../src/assets/images/hero/slider-4.jpg";
import eventsData from "../../../src/data/events";
import { sliderSettings } from './sliderSettings';

import PageSubTitle from "../../../src/assets/images/titles/subtitle.png";

const Slides = [Slide1, Slide2, Slide3, Slide4];

let MainSlider = (props, ref) => {
    const slider = useRef(null);

    useImperativeHandle(ref, () => ({
        slickNext: () => {
            slider.current.slickNext();
        },
        slickPrev: () => {
            slider.current.slickPrev();
        }
    }));

    return (
        <div className="content-body section">
            <div className="section-wrap section" style={{ overflow: "visible" }}>
                <Container fluid>
                    <Row>
                        <Col className={'p-0'}>
                            <div className='page-title'>
                                <h1 className='dharma'>ANTIBABYLON</h1>
                                <br />
                                <img src={PageSubTitle} alt={"free multilingual poetic space"} title={"free multilingual poetic space"} />
                                <div className='main-info'>Oct. - Nov. 2022 | {eventsData.map((event, idx) => { return `${event.country}${idx < eventsData.length - 1 ? ", " : ""}` })}</div>
                            </div>
                            <Slider {...sliderSettings}>
                                {Slides.map((slide, idx) => {
                                    return <img key={idx} src={slide} alt={"AntiBabylon 2022"} title={"AntiBabylon 2022"} />
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default forwardRef(MainSlider);
