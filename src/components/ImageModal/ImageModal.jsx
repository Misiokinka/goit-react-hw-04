import Modal from 'react-modal';
import css from "./ImageModal.module.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: " rgba(0, 0, 0, 0)",
        border:"none"
    },
};



const ImageModal = (props) => {
    const { modalIsOpen, selectedImage, setModalIsOpen } = props

    return (
        <div > <Modal
            style={customStyles}
            ariaHideApp={false}
            isOpen={modalIsOpen}
            contentLabel="Example Modal"
            onRequestClose={() => setModalIsOpen(false)}>

            <div><img className={css.imageModal} onClick={() => {
                setModalIsOpen(false)

            }} src={selectedImage.urls.regular}
                alt={selectedImage.alt_description} /></div>
        </Modal></div>
    )


}
export default ImageModal;