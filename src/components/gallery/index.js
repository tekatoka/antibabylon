import React from 'react';
import { Gallery } from "react-grid-gallery";
import Slider from 'react-slick';
import { AppContext, modalStyles } from '../../App';

const GalleryCarousel = ({ idx, images }) => {
    const sliderSettings = {
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        accessibility: true,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: idx
    };
    return <Slider {...sliderSettings}>
        {images.map((slide, index) => {
            return <img key={index} src={slide.src} alt={slide.caption} title={slide.caption} />
        })}
    </Slider>

}

const GalleryGrid = ({ images }) => {
    const context = React.useContext(AppContext);

    const getImages = () => {
        let preparedImages = [];
        images.forEach(item => {
            const src = require('../../assets/images/' + item.src);
            preparedImages = [...preparedImages, {
                src: src,
                caption: item.caption
            }]
        });
        return preparedImages;
    }

    return (
        <Gallery images={getImages()} enableImageSelection={false} rowHeight={200} tileViewportStyle={{ width: "200px", overflow: "hidden" }}
            onClick={(index) => context.showModal(<GalleryCarousel idx={index} images={getImages()} />, modalStyles.image)} />
    );
};

export default GalleryGrid;