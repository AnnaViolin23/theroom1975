import classNames from 'classnames';
import { ImageType } from '../../types/ImageType';
import './List.scss';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  imageType: ImageType;
  listVisible: boolean;
  setImageType: (value: ImageType) => void;
  setListVisible: (value: boolean) => void;
};

export const List: React.FC<Props> = ({ imageType, listVisible, setImageType, setListVisible }) => {

  const menuItems = [
    { id: 'origin', label: 'origin' },
    { id: 'raw', label: 'black&white' },
    { id: 'glow', label: 'neon' },
  ];

  return (
    <div className="bgi-menu">
      <p
        className={classNames('bgi-menu__header', { 
          'is-visible': listVisible 
        })}
        onClick={() => setListVisible(!listVisible)}
      >
        ERA CHANGE
      </p>
      {/* {listVisible && ( */}
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
      {/* )} */}

      <Link className="bgi-menu__header" to="/discuss">
        DISCUSS
      </Link>
      <Link className="bgi-menu__header" to="/contacts">
        CONTACTS
      </Link>
    </div>
  );
};
