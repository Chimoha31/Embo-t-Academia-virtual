import React, { useState } from "react";
import "./Gallery.scss";
import GalleryImages from "../../data/GalleryImages";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(GalleryImages[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (gallery, index) => {
    setCurrentIndex(index);
    setSelectedImage(gallery.image);
  };

  const handleRightArrow = () => {
    const totalLength = GalleryImages.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      setSelectedImage(GalleryImages[0].image);
      return;
    } else {
      const newIndex = currentIndex + 1;
      const newUrl = GalleryImages.filter((item) => {
        return GalleryImages.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].image;
      setCurrentIndex(newIndex);
      setSelectedImage(newItem);
    }
  };

  const handleLeftArrow = () => {
    const totalLength = GalleryImages.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      setSelectedImage(GalleryImages[totalLength - 1].image);
      return;
    } else {
      const newIndex = currentIndex - 1;
      const newUrl = GalleryImages.filter((item) => {
        return GalleryImages.indexOf(item) === newIndex;
      });
      setCurrentIndex(newIndex);
      setSelectedImage(newUrl[0].image);
    }
  };
  // console.log("Image", selectedImage);
  // console.log("Index", currentIndex);

  return (
    <div className="gallery">
      {/* Slide Show */}
      <div className="slide_container">
        {/* {GalleryImages.map((gallery) => ( */}
        <div className="slide_gallery">
          <p className="prev" onClick={handleLeftArrow}>
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
        {GalleryImages.map((gallery, index) => (
          <div key={index} className="all_images">
            <img
              style={{ border: selectedImage === gallery.image ? "4px solid #e3eaa7" : "" }}
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
