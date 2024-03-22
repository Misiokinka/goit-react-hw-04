
import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (props) => {
    const { images, modalOpen } = props
    return (<ul className={css.imageGalleryList}>
        {images.map(image => (
            <li className={css.imageItemList} key={image.id} >
                <ImageCard
                    src={image.urls.small}
                    alt={image.alt_description}
                    modalOpen={modalOpen}
                    image={image}
                />
            </li>))}
    </ul>)

}

export default ImageGallery;