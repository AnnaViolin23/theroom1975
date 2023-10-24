import { useEffect, useState } from 'react'
import './Main.scss'
import { Information } from '../Information/Information';
import classNames from 'classnames';
import { ImageType } from '../../types/ImageType';
import { List } from '../BGList/List';
// import {CommentPage} from '../CommentPage/CommentPage';

export const Main: React.FC = () => {
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  // const [hideMenu, setHideMenu] = useState<boolean>(false);
  const [imageType, setImageType] = useState<ImageType>('origin');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // const closeMenu = () => {
  //   setHideMenu(true);
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true)
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <>
      <div className={classNames('container', {
        'show-image': showImage,
        'showMenu': showMenu,
        [imageType]: true
      })}>
        <button
          className={classNames('burger-button', { 'is-active': showMenu })}
          onClick={toggleMenu}
        >
          {showMenu ? "-" : "+"}
        </button>

        <List
          imageType={imageType}
          setImageType={setImageType}
        />

        <Information />
      </div>
        {/* <CommentPage /> */}
    </>
  )
}


// window.addEventListener('click', function (event) {
//   const x = event.clientX;
//   const y = event.clientY;

//   console.log(`Координати: x=${x}, y=${y}`);
// });