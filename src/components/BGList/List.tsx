import { ImageType } from '../../types/ImageType';
import './List.scss';

type Props = {
  imageType: ImageType;
  setImageType: (value: ImageType) => void;
};

export const List: React.FC<Props> = ({ imageType, setImageType }) => {
  const menuItems = [
    { id: 'origin', label: 'origin' },
    { id: 'raw', label: 'RAW' },
    { id: 'glow', label: 'glow' },
  ];

  return (
    <div className="bgi-menu">
      <p className="bgi-menu__header">I want it:</p>
      {menuItems.map((menuItem) => (
        <div className="bgi-menu__item" key={menuItem.id}>
          <input
            type="radio"
            className="bgi-menu__radio"
            id={menuItem.id}
            name="menu"
            checked={imageType === menuItem.id}
            onChange={() => setImageType(menuItem.id as ImageType)}
          />
          <label htmlFor={menuItem.id} className="bgi-menu__label">
            {menuItem.label}
          </label>
        </div>
      ))}
    </div>
  );  
};
