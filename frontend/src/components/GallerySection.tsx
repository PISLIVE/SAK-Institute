"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './GallerySection.module.css';

type GalleryImage = {
  id: string;
  imageUrl: string;
  caption: string | null;
  category: string;
};

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setGalleryImages(data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section className={styles.gallerySection}>
      <div className={styles.sideTextLeft}>
        <div className={styles.slidingText}>CLINICAL TRAINING &bull; CAMPUS LIFE &bull; CLINICAL TRAINING &bull; CAMPUS LIFE &bull;</div>
      </div>
      <div className={styles.sideTextRight}>
        <div className={styles.slidingTextReverse}>SAK COLLEGE OF NURSING &bull; EXCELLENCE &bull; SAK COLLEGE OF NURSING &bull; EXCELLENCE &bull;</div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className={styles.header}>
          <h2 className={styles.title}>Campus Life & Clinical Training</h2>
          <p className={styles.subtitle}>
            A glimpse into the daily life of our nursing students, our state-of-the-art facilities, and their journey towards becoming healthcare professionals.
          </p>
        </div>
        
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => {
            const isLarge = index === 0 || index === 7;
            const isWide = index === 3 || index === 10;
            
            let itemClass = styles.galleryItem;
            if (isLarge) itemClass += ` ${styles.large}`;
            else if (isWide) itemClass += ` ${styles.wide}`;

            return (
              <div key={image.id} className={itemClass} onClick={() => setSelectedImage(image.imageUrl)}>
                <Image 
                  src={image.imageUrl} 
                  alt={image.caption || 'Gallery Image'} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <span>{image.caption || 'SAK College Life'} 🔍</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && typeof document !== 'undefined' && createPortal(
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.lightboxClose} onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
            &times;
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image 
              src={selectedImage} 
              alt="Fullscreen view" 
              fill 
              style={{ objectFit: 'contain' }} 
            />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
