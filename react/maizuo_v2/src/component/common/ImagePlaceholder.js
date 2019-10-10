import React, { useState } from 'react';

function ImagePlaceholder(props) {
  const [ opacity, setOpacity ] = useState(0);

  return (
    <div
      className="img-responsive"
      style={{
        backgroundImage: `url(${props.placeholder})`,
        backgroundSize: '100%',
      }}
    >
      <img
        src={props.src}
        onLoad={() => setOpacity(1)}
        style={{ width: '100%', transition: 'all 1.2s ease', opacity: opacity }}
        alt=""
      />
    </div>
  );
}
export default ImagePlaceholder;
