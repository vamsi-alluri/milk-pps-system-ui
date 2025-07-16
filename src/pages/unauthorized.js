// pages/Unauthorized.js

import { getIconImage } from '../utils/ImageLoader';

const imageSrc = getIconImage("you-shall-not-pass-401.jpg");

const Unauthorized = () => (
  <div className="unauthorized">
  <img alt="Unauthorized Page!" className="unauthorized" src={imageSrc}></img> 
  <strong>Unauthorized. Contact administrator for access.</strong>
  </div>
);

export default Unauthorized;
