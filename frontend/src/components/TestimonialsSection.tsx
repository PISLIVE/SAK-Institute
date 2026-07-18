"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "B.Sc. Nursing Graduate, 2023",
    quote: "SAK College provided me with the absolute best clinical exposure. The faculty supported me every step of the way, and I was placed in a top hospital immediately after graduation.",
    image: "/gallery3.jpeg" // Using existing image as placeholder
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "GNM Alumnus",
    quote: "The state-of-the-art laboratories and dedicated mentors made my learning experience incredible. I am proud to be an alumnus of such a prestigious institution.",
    image: "/gallery5.jpeg" // Using existing image as placeholder
  },
  {
    id: 3,
    name: "Anjali Das",
    role: "M.Sc. Nursing Student",
    quote: "Choosing SAK was the best decision of my career. The holistic approach to healthcare education here prepares you not just for exams, but for real-world challenges.",
    image: "/gallery8.jpeg" // Using existing image as placeholder
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.decorativeBackground}></div>
      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.header}>
          <span className={styles.badge}>ALUMNI VOICES</span>
          <h2 className={styles.title}>What Our Students Say</h2>
          <p className={styles.subtitle}>Discover why thousands of aspiring healthcare professionals choose SAK College to kickstart their careers.</p>
        </div>

        <div className={styles.sliderContainer}>
          <div 
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.slide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.quoteText}>{testimonial.quote}</p>
                  <div className={styles.profile}>
                    <div className={styles.avatarWrapper}>
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.profileInfo}>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.navigation}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
