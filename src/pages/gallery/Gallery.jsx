import React, { useState } from "react";
// import { Carousel } from "react-bootstrap";
import "./Gallery.scss";
import data from '../../data/GalleryImages.json';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(data.data[0].image);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (gallery, index) => {
    setCurrentIndex(index);
    setSelectedImage(gallery.image);
  };
  console.log(currentIndex);

  const handleRightArrow = () => {
    console.log("Right Arrow clicked");
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength ) {
      setCurrentIndex(0);
      // const newUrl = data.data[0].image;
      setSelectedImage(data.data[0].image);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setSelectedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handleLeftArrow = () => {
    // const totalLength = GalleryImages.length;
    // if (currentIndex === 0) {
    //   setCurrentIndex(totalLength - 1);
    //   const newUrl = GalleryImages[totalLength - 1].image;
    //   setSelectedImage(newUrl);
    //   return;
    // }
    // const newIndex = currentIndex - 1;
    // const newUrl = GalleryImages.filter((item) => {
    //   return GalleryImages.indexOf(item) === newIndex;
    // });
    // const newItem = newUrl[0].image;
    // setSelectedImage(newItem);
    // setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery">
      {/* Slide Show */}
      <div className="slide_container">
        {/* {GalleryImages.map((gallery) => ( */}
        <div className="slide_gallery" onClick={() => handleLeftArrow()}>
          <p className="prev">
            <i className="fa-solid fa-chevron-left"></i>
          </p>
          <p className="next" onClick={handleRightArrow}>
            <i className="fa-solid fa-chevron-right"></i>
          </p>

          <img
            className="d-block w-100"
            src={selectedImage}
            alt="Selected Class"
          />
        </div>
        {/* ))} */}
      </div>

      {/* All GalleryImages */}
      <div className="images_container">
        {data.data.map((gallery, index) => (
          <div key={index} className="all_images">
            <img
              src={gallery.image}
              alt="Class Img"
              onClick={() => handleClick(gallery, index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
