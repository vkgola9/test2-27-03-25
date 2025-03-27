import React from 'react';

const Image = ({ src, alt, width = 1617, height = 1080 }) => (
  <img src={src} alt={alt} className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg" width={width} height={height} />
);

export default Image;
