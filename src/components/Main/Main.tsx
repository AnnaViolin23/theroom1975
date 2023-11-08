import React from 'react';
import { useEffect, useState } from 'react'
import './Main.scss'
import classNames from 'classnames';
import { Information } from '../Information/Information';
import { ImageType } from '../../types/ImageType';
import { List } from '../List/List';
import { ScrollReminder } from '../ScrollReminder/ScrollReminder';
import { setMenuHeight } from '../../helpers/setMenuheight';

export const Main: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [imageType, setImageType] = useState<ImageType>('origin');
  const [listVisible, setListVisible] = useState(false);
  const [isActiveScrollReminder, setIsActiveScrollToReminder] = useState(false);


  const imagePaths = {
    origin: '/images/IMG_2204.jpg',
    raw: '/images/IMG_2204_b&w.png',
    glow: '/images/IMG_2204_glow.png',
  };

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setListVisible(false);
    } else {
      setShowMenu(true);
    }
  };

  useEffect(() => {
    setMenuHeight();
    const preloadImages = [
      '/images/IMG_2204.jpg',
      '/images/IMG_2204_b&w.png',
      '/images/IMG_2204_glow.png'
    ];

    preloadImages.forEach((imageSrc) => {
      const preloadImage = new Image();
      preloadImage.src = imageSrc;
    });

    setIsActiveScrollToReminder(true);
    setShowImage(true);
  }, []);


  useEffect(() => {
    setShowMenu(false);
    setListVisible(false);
  }, [imageType, setShowMenu]);


  return (
    <div className='main'>
      <div className={classNames('container', {
        'show-menu': showMenu,
        'show-image': showImage,
        [imageType]: true
      })}>

        {showMenu && (
          <img
            src={showMenu ? '/close1.png' : '/menu.png'}
            className={classNames('burger-button', {
              'is-active': showMenu,
            })}
            onClick={toggleMenu}
            alt='burger-menu icon'
          />
        )}

        <img
          src={'/menu.png'}
          className={classNames('burger-button', {
            'is-active': showMenu,
          })}
          onClick={toggleMenu}
          alt='burger-menu icon'
        />

        <img src={imagePaths[imageType]}
          className={classNames(
            'image', {
            'active-menu': showMenu,
          })}
          alt='img' />

        <List
          listVisible={listVisible}
          setListVisible={setListVisible}
          imageType={imageType}
          setImageType={setImageType}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />

        <Information />

        {isActiveScrollReminder && (
          <ScrollReminder
            isActive={isActiveScrollReminder}
            setIsActive={setIsActiveScrollToReminder}
          />
        )}
      </div>
    </div>
  )
}

