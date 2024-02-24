import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'

/**
 * @param {'react'|'vite'} props.displayedImage
 */
const Tile = ({ imageState, onClick, displayedImage }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    switch (displayedImage) {
      case 'react':
        setImage(ReactLogo);
        break;
      case 'vite':
        setImage(ViteLogo);
        break;
      default:
        setImage(null);
    }
  }, [displayedImage]);

  const swapLogo = () => {
    if (image === ReactLogo) {
      setImage(ViteLogo);
    } else if (image === ViteLogo) {
      setImage(ReactLogo);
    }
  };

  return (
    <img onClick={()=>{onClick();swapLogo();}} src={image} alt="Displayed" />
  );
};

Tile.propTypes = {
  displayedImage: PropTypes.oneOf(['react', 'vite']),
};

Tile.defaultProps = {
  displayedImage: 'vite',
};

export default Tile;
