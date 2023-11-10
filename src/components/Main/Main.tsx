import './Main.scss';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { Information } from '../Information/Information';
import { ImageType } from '../../types/ImageType';
import { List } from '../List/List';
import { ScrollReminder } from '../ScrollReminder/ScrollReminder';
import { setMenuHeight } from '../../helpers/setMenuheight';

type ImagePaths = {
  [key: string]: string;
};

export const Main: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [imageType, setImageType] = useState<ImageType>('origin');
  const [listVisible, setListVisible] = useState(false);
  const [isActiveScrollReminder, setIsActiveScrollToReminder] = useState(true);
  // const [isInitialLoad, setIsInitialLoad] = useState(true);

  // const sessionStorageKey = 'mainComponentOpened';
  // const isInitialLoadKey = 'isInitialLoad';

  const imagePaths: ImagePaths = useMemo(() => ({
    origin: '/images/IMG_2204.jpg',
    raw: '/images/IMG_2204_b&w.png',
    glow: '/images/IMG_2204_glow.png',
  }), []);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
      setListVisible(false);
    } else {
      setShowMenu(true);
    }
  };
  
  const preloadImages = useCallback(() => {
    const loadedImages: Record<string, boolean> = {};

    const preloadCallback = () => {
      loadedImages[imageType] = true;

      if (Object.values(loadedImages).every(Boolean)) {
        setShowImage(true);
      }
    };

    for (const type in imagePaths) {
      const preloadImage = new Image();
      preloadImage.src = imagePaths[type];
      preloadImage.onload = preloadCallback;
    }
  }, [imageType, imagePaths]);

    useEffect(() => {
      // const hasComponentBeenOpened = sessionStorage.getItem(sessionStorageKey);
      // const isInitialLoad = sessionStorage.getItem(isInitialLoadKey) === 'true';
  
      // if (!hasComponentBeenOpened) {
      //   setIsInitialLoad(true);
      //   sessionStorage.setItem(sessionStorageKey, 'true');
      //   sessionStorage.setItem(isInitialLoadKey, 'true');
      // } else {
      //   setIsInitialLoad(false);
      // }
  
      setMenuHeight();
      preloadImages();
    }, [
      preloadImages, 
      // setIsInitialLoad
    ]);

    useEffect(() => {
      setShowMenu(false);
      setListVisible(false);
    }, [imageType, setShowMenu]);
  
  return (
    <div className='main'>
      <div className={classNames('container', {
        'show-menu': showMenu,
        'show-image': showImage,
        [imageType]: true,
      })}>

        <img
          src='/menu.png'
          className={classNames('burger-button', {
            'is-active': showMenu,
          })}
          onClick={toggleMenu}
          alt='burger menu icon'
        />

        <img
          src={imagePaths[imageType]}
          className={classNames('image', {
            'active-menu': showMenu,
          })}
          alt='main img'
        />

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
  );
};
