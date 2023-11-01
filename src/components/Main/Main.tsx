import React from 'react';
import { useEffect, useState } from 'react'
import './Main.scss'
import classNames from 'classnames';
import { Information } from '../Information/Information';
import { ImageType } from '../../types/ImageType';
import { List } from '../BGList/List';
import { ScrollReminder } from '../ScrollReminder/ScrollReminder';
// import {CommentPage} from '../CommentPage/CommentPage';


type Props = {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

export const Main: React.FC<Props> = ({ showMenu, setShowMenu }) => {
  const [showImage, setShowImage] = useState<boolean>(false);
  // const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [hideMenu, setHideMenu] = useState<boolean>(false);
  const [imageType, setImageType] = useState<ImageType>('origin');
  const [listVisible, setListVisible] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);

  const imagePaths = {
    origin: '/images/IMG_2204.jpg',
    raw: '/images/IMG_2204_b&w.png',
    glow: '/images/IMG_2204_glow.png',
  };

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setListVisible(false);
      setCloseMenu(true);
      // window.scrollTo(window.innerWidth / 2, window.scrollY);
    } else {
      setShowMenu(true);
      setCloseMenu(false);
    }
  };

  // const closeMenu = () => {
  //   setHideMenu(true);
  // }

  useEffect(() => {
    const preloadImages = [
      '/images/IMG_2204.jpg',
      '/images/IMG_2204_b&w.png',
      '/images/IMG_2204_glow.png'
    ];

    preloadImages.forEach((imageSrc) => {
      const preloadImage = new Image();
      preloadImage.src = imageSrc;
    });


    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
    setListVisible(false);
  }, [imageType, setShowMenu]);


  return (
    <div className='main'>
      <div className={classNames('container', {
        'show-image': showImage,
        'show-menu': showMenu,
        'is-closed': closeMenu,
        [imageType]: true
      })}>
        <img
          src={showMenu ? '/close1.png' : '/menu.png'}
          className={classNames('burger-button', { 'is-active': showMenu })}
          onClick={toggleMenu}
          alt='burger-menu icon'
        />

        <img src={imagePaths[imageType]} className='image' alt='img' />

        <ScrollReminder />

        <List
          listVisible={listVisible}
          setListVisible={setListVisible}
          imageType={imageType}
          setImageType={setImageType}
        />
        <Information />
      </div>
      {/* <CommentPage /> */}
    </div>
  )
}

