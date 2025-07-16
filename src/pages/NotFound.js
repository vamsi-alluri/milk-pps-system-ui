// pages/NotFound.js

import { getIconImage } from '../utils/ImageLoader';

const imageSrc = getIconImage("lost-in-space-404.png");

const NotFound = () => (
  

  <div className="NotFound"> 
  <img src={imageSrc} alt="You've stumbled upon an unknown space." width="100%"/>
  </div>
);

export default NotFound;
