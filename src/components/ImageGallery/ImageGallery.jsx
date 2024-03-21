
import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (props) => {
    const { images, setModalIsOpen, setSelectedImage } = props
    return (<ul className={css.imageGalleryList}>
        {images.map(image => (
            <li className={css.imageItemList} key={image.id} onClick={() => {
                setModalIsOpen(true);
                setSelectedImage(image);
            }}>
                <ImageCard
                    src={image.urls.small}
                    alt={image.alt_description}

                />
            </li>))}
    </ul>)

}

export default ImageGallery;