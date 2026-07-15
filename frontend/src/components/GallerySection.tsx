import Image from 'next/image';
import styles from './GallerySection.module.css';

export default function GallerySection() {
  // Array of image numbers, replacing 8 with 15
  const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 15, 9, 10, 11, 12, 13, 14];
  const galleryImages = imageNumbers.map((num) => ({
    id: num,
    src: `/gallery${num}.${num === 15 ? 'png' : 'jpeg'}`,
    alt: `SAK College Gallery Image ${num}`
  }));

  return (
    <section className={styles.gallerySection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Campus Life & Clinical Training</h2>
          <p className={styles.subtitle}>
            A glimpse into the daily life of our nursing students, our state-of-the-art facilities, and their journey towards becoming healthcare professionals.
          </p>
        </div>
        
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => {
            // Create a masonry-like effect by making specific images larger
            const isLarge = index === 0 || index === 7;
            const isWide = index === 3 || index === 10;
            
            let itemClass = styles.galleryItem;
            if (isLarge) itemClass += ` ${styles.large}`;
            else if (isWide) itemClass += ` ${styles.wide}`;

            return (
              <div key={image.id} className={itemClass}>
                <Image 
                  src={image.src} 
                  alt={image.alt} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                  className={styles.image} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <span>SAK College Life</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
