
import css from "./ImageCard.module.css";

const ImageCard = (props) => {
    const { src, alt, modalOpen, image } = props;

    return <img className={css.imageItem} width={200} height={200} src={src} alt={alt} onClick={() => {
        modalOpen(image)
    }} />;;
};

export default ImageCard;
