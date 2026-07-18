'use client';

import { useState, useEffect } from 'react';
import styles from '../AdminPages.module.css';
import { FaTrash, FaUpload, FaImage } from 'react-icons/fa';
import Image from 'next/image';

type GalleryImage = {
  id: string;
  imageUrl: string;
  caption: string | null;
  category: string;
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('CAMPUS');

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await fetch('/api/gallery');
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    try {
      // 1. Upload file to server
      const formData = new FormData();
      formData.append('file', file);
      
      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const uploadData = await uploadRes.json();
      
      if (uploadData.error) throw new Error(uploadData.error);

      // 2. Save gallery record to DB
      await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageUrl: uploadData.url,
          caption: caption,
          category: category,
        }),
      });

      setFile(null);
      setCaption('');
      fetchGallery();
    } catch (error) {
      console.error('Failed to upload', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      fetchGallery();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Media Gallery</h1>
      <p className={styles.subtitle}>Upload and manage photos for the college website.</p>

      <div className={styles.formCard} style={{ marginBottom: '2rem', maxWidth: '100%' }}>
        <h2 className={styles.sectionTitle} style={{ marginTop: 0 }}>Upload New Photo</h2>
        <form onSubmit={handleUpload} className={styles.form}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', alignItems: 'end' }}>
            
            <div className={styles.formGroup}>
              <label>Select Image File</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={(e) => setFile(e.target.files?.[0] || null)} 
                required 
                style={{ padding: '0.6rem' }}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label>Caption (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Students in Library" 
                value={caption} 
                onChange={(e) => setCaption(e.target.value)} 
              />
            </div>

            <div className={styles.formGroup}>
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="CAMPUS">Campus & Infrastructure</option>
                <option value="EVENTS">Events & Activities</option>
                <option value="LABS">Laboratories</option>
                <option value="OTHERS">Others</option>
              </select>
            </div>
            
          </div>
          
          <button type="submit" className={styles.submitBtn} disabled={!file || uploading}>
            {uploading ? 'Uploading...' : <><FaUpload /> Upload Photo</>}
          </button>
        </form>
      </div>

      <div className={styles.card} style={{ padding: '2rem', background: 'transparent', border: 'none', boxShadow: 'none' }}>
        {loading ? (
          <p>Loading gallery...</p>
        ) : images.length === 0 ? (
          <div className={styles.empty} style={{ background: 'white', borderRadius: '12px' }}>
            <FaImage size={40} style={{ marginBottom: '1rem', color: '#cbd5e1' }} />
            <p>No images in the gallery yet.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {images.map(img => (
              <div key={img.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', width: '100%', height: '200px', backgroundColor: '#f1f5f9' }}>
                  {img.imageUrl ? (
                    <Image src={img.imageUrl} alt={img.caption || 'Gallery Image'} fill style={{ objectFit: 'cover' }} />
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                      <FaImage size={30} color="#cbd5e1" />
                    </div>
                  )}
                </div>
                <div style={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.05rem', color: '#0f172a' }}>{img.caption || 'Untitled'}</h3>
                    <span className={styles.statusBadge} style={{ background: '#f1f5f9', color: '#475569', fontSize: '0.75rem' }}>{img.category}</span>
                  </div>
                  <button 
                    onClick={() => handleDelete(img.id)} 
                    style={{ marginTop: '1rem', alignSelf: 'flex-end', color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem', fontWeight: 600 }}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
