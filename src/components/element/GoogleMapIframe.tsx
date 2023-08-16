import React from 'react';

interface GoogleMapIframeProps {
  src: string;
  width?: string;
  height?: string;
}

const GoogleMapIframe: React.FC<GoogleMapIframeProps> = ({
  src,
  width = '100%',
  height = '450px',
}) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      allowFullScreen
      loading="lazy"
    ></iframe>
  );
};

export default GoogleMapIframe;
