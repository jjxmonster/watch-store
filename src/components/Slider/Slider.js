import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import {
   StyledSliderWrapper,
   StyledPrevSlideButton,
   StyledNextSlideButton,
} from './Slider.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChevronRight,
   faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

import { products } from '../../products/products';

const Slider = () => {
   const selectedWatchId = useSelector(store => store.watches.selectedWatchId);
   const [numberOfSlide, setNumberOfSlide] = useState(1);
   const sliderContainer = useRef();

   const selectedWatch = products.filter(item => item.id === selectedWatchId);
   const SliderImages = selectedWatch[0].images.map(image => (
      <img src={image} className='image' alt='slide' key={image} />
   ));

   const sliderImagesMove = () => {
      const sliderWrapper = sliderContainer.current;
      switch (numberOfSlide) {
         case 1:
            sliderWrapper.style = 'margin-left:0';
            break;
         case 2:
            sliderWrapper.style = 'margin-left:-100%';
            break;
         case 3:
            sliderWrapper.style = 'margin-left:-200%';
            break;
         default:
            break;
      }
   };

   const handleSetNumberOfSlide = type => {
      switch (type) {
         case 'INCREMENT':
            setNumberOfSlide(numberOfSlide + 1);
            break;
         case 'DECREMENT':
            setNumberOfSlide(numberOfSlide - 1);
            break;
         default:
            break;
      }
   };

   useEffect(() => {
      sliderImagesMove();
   }, [numberOfSlide]);

   useEffect(() => {
      setNumberOfSlide(1);
   }, [selectedWatchId]);

   return (
      <>
         <StyledNextSlideButton
            disabled={numberOfSlide === 3 ? true : false}
            onClick={() => handleSetNumberOfSlide('INCREMENT')}
         >
            <FontAwesomeIcon icon={faChevronRight} />
         </StyledNextSlideButton>

         <StyledPrevSlideButton
            disabled={numberOfSlide === 1 ? true : false}
            onClick={() => handleSetNumberOfSlide('DECREMENT')}
         >
            <FontAwesomeIcon icon={faChevronLeft} />
         </StyledPrevSlideButton>

         <StyledSliderWrapper ref={sliderContainer}>
            {SliderImages}
         </StyledSliderWrapper>
      </>
   );
};

export default Slider;
