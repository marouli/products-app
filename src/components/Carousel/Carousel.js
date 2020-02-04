import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({images}) => {
	const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const prevSlide = () => {
    // find out whether currentImageIdx equals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    const resetIndex = currentImageIdx === images.length - 1;
    const index = resetIndex ? 0 : currentImageIdx + 1;
    setCurrentImagIdx(index);
  }

  // create a new array from the source images
  const activeImageSourcesFromState = images.slice(currentImageIdx, currentImageIdx + 1);

  const imageSourcesToDisplay = activeImageSourcesFromState.length < 2
    // append missing images from the beginning of the original array
    ? [...activeImageSourcesFromState, ...images.slice(0, 1 - activeImageSourcesFromState.length) ]
		: activeImageSourcesFromState;

  return (
    <div className="c-carousel">
      <div className="c-carousel-img__container">
        {imageSourcesToDisplay.map((image, index) =>
          <img className="c-carousel__img" key={index} src={image} alt=""/>
        )}
      </div>
      <div className="c-carousel-btn__container">
        <button className="c-carousel-btn--previous" onClick={prevSlide}><span>Previous</span></button>
        <button className="c-carousel-btn--next" onClick={nextSlide}><span>Next</span></button>
      </div>
    </div>
	);
}

export default Carousel;