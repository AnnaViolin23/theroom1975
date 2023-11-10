import './List.scss';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import { ImageType } from '../../types/ImageType';
import { Link } from 'react-router-dom';
import { setMenuHeight } from '../../helpers/setMenuheight';

type Props = {
  imageType: ImageType;
  listVisible: boolean;
  showMenu: boolean;
  setImageType: (value: ImageType) => void;
  setListVisible: (value: boolean) => void;
  setShowMenu: (value: boolean) => void;
};

export const List: React.FC<Props> = ({
  imageType,
  listVisible,
  showMenu,
  setImageType,
  setListVisible,
  setShowMenu,
}) => {

  const menuItems = [
    { id: 'origin', label: 'origin' },
    { id: 'raw', label: 'black&white' },
    { id: 'glow', label: 'neon' },
  ];

  useEffect(() => {
    setMenuHeight();
  })

  return (
    <>
      <div className={classNames(
        'bgi-menu', {
        'open': showMenu,
        'closed': !showMenu
      })}>

        <div className='bgi-menu__top-bar__close'>
          <img
            src='/closeList.png'
            onClick={() => setShowMenu(false)}
            alt='close list button'
            className={classNames(
              'bgi-menu__top-bar__close--button', {
              'active': showMenu
            })}
          >
          </img>
        </div>

        <p
          className={classNames('bgi-menu__header', {
            'is-visible': listVisible
          })}
          onClick={() => setListVisible(!listVisible)}
        >
          ERA CHANGE
        </p>
        <div className={classNames("bgi-menu__items", { 'is-visible': listVisible })}>
          {menuItems.map((menuItem) => (
            <div className={classNames("bgi-menu__item", { 'is-active': imageType === menuItem.id })}
              key={menuItem.id}
              data-id={menuItem.id}
              onClick={() => setImageType(menuItem.id as ImageType)}
            >
              <label className="bgi-menu__label">
                {menuItem.label}
              </label>
            </div>
          ))}
        </div>

        <Link className="bgi-menu__header" to="/discuss">
          DISCUSS
        </Link>
        <Link className="bgi-menu__header" to="/contacts">
          CONTACTS
        </Link>
      </div>

    </>
  );
};
