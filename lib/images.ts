import type { StaticImageData } from 'next/image';

interface ImageData {
  src: string;
  alt: string;
  
}

export async function getImages(): Promise<ImageData[]> {
  // Manually define the image paths
  const imagePaths = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
'/images/5.jpg',
'/images/6.jpg',
'/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    // Add more image paths here
  ];

  // Dynamically return the images
  return imagePaths.map((path, index) => ({
    src: path,
    alt: `Image ${index + 1}`,
  }));
}
