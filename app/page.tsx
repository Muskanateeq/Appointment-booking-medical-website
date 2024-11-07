import React from 'react';
import SliderComponent from '@/components/SliderComponent';
import MainSlider from '@/components/MainSlider'
import styles from "./page.module.css";
import DoctorsDetails from "@/components/DoctorsDetails";
import HomeContent from '@/components/HomeContent';

const componentsliderimages = [
  '/singledoctor.jpg',
  '/singledoctor3.jpg',
];

const componentslidertext = [
  { heading: 'Our Featured Services', paragraph: 'Explore our wide range of medical services, from general checkups to specialized treatments with state-of-the-art facilities.' },
  { heading: 'Trusted by Thousands', paragraph: 'We have a long history of delivering excellent patient care and are trusted by thousands of patients worldwide.' },
];

const mainsliderimages = [
  '/teamlead2.avif',
  '/teamleadmain.avif',
];

const mainslidertext = [
  { heading: 'Welcome To Medcare', paragraph: 'Welcome to our medical website! Your health is our priority. Explore trusted resources, expert advice, and personalized care all in one place.' },
  { heading: 'The Best Doctors', paragraph: 'Our team of top doctors is dedicated to providing exceptional care with expertise you can trust, ensuring the best possible outcomes for your health.' },
];

export default function HomePage() {
  return (
    <>
    {/* Slider Section - Added this at the top */}
    <div className={styles.sliderSection}>
      <MainSlider images={mainsliderimages} texts={mainslidertext} />
    </div>

    <div>
      <HomeContent/>
    </div>

    {/* Slider Section */}
    <div className={styles.sliderSection}>
      <SliderComponent images={componentsliderimages} texts={componentslidertext} />
    </div>
    
    <div>
      <DoctorsDetails/>
    </div>

    </>
  );
}
