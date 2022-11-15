import React from 'react';
import { Gallery } from "react-grid-gallery";
import { AppContext } from '../../App';

const GalleryImage = ({ image }) => {
    return <div className="gallery-image">
        <img src={image.src} alt={image.caption} title={image.caption} />
        {image.caption && <div className={"gallery-image-caption"}>{image.caption}</div>}
    </div>
    //src={require('../../assets/images/' + person.photo)}
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
        <Gallery images={getImages()} enableImageSelection={false} rowHeight={200} tileViewportStyle={{ width: "200px", overflow: "hidden" }} onClick={(index, image) => context.showModal(<GalleryImage image={image} />, "image")} />
    );
};

export default GalleryGrid;