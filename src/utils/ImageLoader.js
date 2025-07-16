// src/utils/imageLoader.js


// Import fallback image (must be inside src/)
import imageNotFound from '../res/icons/image-not-found.png';

function importAll(r) {
  const images = {};
  r.keys().forEach((key) => {
    const fileName = key.replace('./', '');
    images[fileName] = r(key);
  });
  return images;
}

// Import image maps
const productImages = importAll(require.context('../res/products', false, /\.(png|jpe?g|svg)$/));
const iconImages = importAll(require.context('../res/icons', false, /\.(png|jpe?g|svg)$/));


/**
 * Safe accessors with fallback
 */
export function getProductImage(filename) {
  return productImages[filename] || imageNotFound;
}

export function getIconImage(filename) {
  return iconImages[filename] || imageNotFound;
}
