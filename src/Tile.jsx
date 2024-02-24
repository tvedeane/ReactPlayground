import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import ReactLogo from './assets/react.svg'
import ViteLogo from '/vite.svg'

/**
 * @param {'react'|'vite'} props.displayedImage
 */
const Tile = forwardRef(({ onClick, displayedImage }, ref) => {
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
    console.log('hey im in the child and swapping the logo!')
    if (image === ReactLogo) {
      setImage(ViteLogo);
    } else if (image === ViteLogo) {
      setImage(ReactLogo);
    }
  };

  useImperativeHandle(ref, () => ({
    swapLogo
  }));

  return (
    <img onClick={()=>{onClick();}} src={image} alt="Displayed" />
  );
});

Tile.propTypes = {
  displayedImage: PropTypes.oneOf(['react', 'vite']),
};

Tile.defaultProps = {
  displayedImage: 'vite',
};

export default Tile;
