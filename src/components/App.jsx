import { useState, useEffect } from 'react'
import './App.css'
import "modern-normalize";
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import SearchBar from './SearchBar/SearchBar';
import { requestImagesByQuery } from "../services/api"
import ImageModal from './ImageModal/ImageModal';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 15;

  const fetchData = async (inputText, isReset) => {
    try {
      setIsLoading(true);
      if (inputText) {
        const data = await requestImagesByQuery(inputText, page, perPage);
        setImages(prevState => (isReset ? data.results : [...prevState, ...data.results]));
      }
    } catch (err) {
      setIsError(true)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchQuery, false);

  }, [page]);

  const onSetSearchQuery = query => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery}
        fetchData={fetchData} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {images.length > 0 && (
        <>
          <ImageGallery
            images={images}
            setModalIsOpen={setModalIsOpen}
            setSelectedImage={setSelectedImage}
          />
          <LoadMoreBtn handleLoadMore={handleLoadMore} />
        </>
      )}
      {modalIsOpen &&
        <ImageModal
          modalIsOpen={modalIsOpen}
          selectedImage={selectedImage}
          setModalIsOpen={setModalIsOpen}
        />
      }
    </>
  );
};

export default App;
