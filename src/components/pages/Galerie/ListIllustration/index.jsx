import React, { useState } from 'react';
import { Loader, Masonry, LazyImage, Lightbox } from 'components/shared';
import fetchData from 'utils/fetchData';
import api from 'API/api';
import 'react-image-lightbox/style.css';
import './style.scss';

const ListIllustration = ({ photoIndex, getIndexPhoto, ...props }) => {
  const [lightboxIsOpen, setIsOpen] = useState(false);

  const { loading, error, data } = fetchData(api.artworks.getArtworks);

  const openLightbox = (index) => {
    getIndexPhoto(index);
    setIsOpen(true);
  };

  const closeLightbox = (bool) => {
    setIsOpen(bool);
  };

  return loading ? (
    <div className="my-24 text-center ">
      <Loader bg="bg-primary " />
    </div>
  ) : error ? (
    <span data-testid="error" className="text-red-800 text-center w-full">
      {error}
    </span>
  ) : (
    <div className="w-11/12 mt-12 mb-6 m-auto masonry">
      <Masonry columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}>
        {data &&
          data.gallery.map((photo, i) => (
            <div key={i} onClick={() => openLightbox(i)}>
              <div className="cursor-pointer ">
                {photo && (
                  <LazyImage
                    className="rounded-lg w-full mt-4 object-fill transition duration-300 ease-in-out hover:scale-105"
                    key={i}
                    src={'/img/' + photo.image}
                    alt={photo.image}
                    placeholder={'/thumb/img/' + photo.image}
                  />
                )}
              </div>
            </div>
          ))}
      </Masonry>
      <Lightbox
        photoIndex={photoIndex}
        lightboxIsOpen={lightboxIsOpen}
        closeLightbox={closeLightbox}
        getIndexPhoto={getIndexPhoto}
        photos={data.gallery}
      />
    </div>
  );
};

export default ListIllustration;
