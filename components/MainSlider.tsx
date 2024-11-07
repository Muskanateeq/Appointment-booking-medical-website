"use client"; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './MainSlider.module.css';

interface SliderProps {
  images: string[];
  texts: { heading: string; paragraph: string }[];
}

const SliderComponent: React.FC<SliderProps> = ({ images, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);


  useEffect(() => {
    const textContainer = document.querySelector(`.${styles.textContainer}`) as HTMLElement; // Cast to HTMLElement
    
    if (textContainer) {
      textContainer.style.animation = 'none'; // Reset animation
      setTimeout(() => {
        textContainer.style.animation = ''; // Reapply animation
      }, 20); // Small timeout to ensure reset works
    }
  }, [currentIndex]);
  
  

  // Functions to handle previous and next navigation
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.navButton} onClick={prevSlide}>&lt;</button>

      {/* Slider Images */}
      <div className={styles.slider}>
        <Image
          src={images[currentIndex]}
          alt={`Slider image ${currentIndex + 1}`}
          width={800}
          height={400}
          className={styles.sliderImage}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.sliderHeading}>{texts[currentIndex].heading}</h2>
          <p className={styles.sliderParagraph}>{texts[currentIndex].paragraph}</p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>

      <button className={styles.navButton} onClick={nextSlide}>&gt;</button>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
