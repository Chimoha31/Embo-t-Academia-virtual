import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Gallery.scss";
import GalleryImages from "../../data/GalleryImages";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(GalleryImages[0].image);

  return (
    <div className="gallery">
      {/* Slide Show */}
      <Carousel fade className="slide_container">
        <Carousel.Item className="slide_gallery">
          <>
            <p className="prev">
              <i className="fa-solid fa-chevron-left"></i>
            </p>
            <p className="next">
              <i className="fa-solid fa-chevron-right"></i>
            </p>
            <img
              className="d-block w-100"
              src={selectedImage}
              alt="Selected Class"
            />
          </>
        </Carousel.Item>
      </Carousel>

      {/* All GalleryImages */}
      <div className="images_container">
        {GalleryImages.map((gallery) => (
          <div key={gallery.id} className="all_images">
            <img
              src={gallery.image}
              alt="Class Img"
              onClick={() => setSelectedImage(gallery.image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
