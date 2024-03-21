import React, { useMemo } from 'react';
import css from "./ImageCard.module.css";

const ImageCard = (props) => {
    const { src, alt } = props;

    const imageItem = useMemo(() => {
        return <img className={css.imageItem} width={200} height={200} src={src} alt={alt} />;
    }, [src, alt]);

    return <>{imageItem}</>;
};

export default ImageCard;
