import './Information.scss';
import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ModalWindow } from '../ModalWinndow/ModalWindow';
import { calculateCoordinates } from '../../helpers/calculateCoordinates';
import { Coordinate } from '../../types/Coordinate';
import { initialCoordinates360x640 } from '../../api/coord360x640';
import { MyObject } from '../../types/singleObject';
import objectList from '../../api/objectList.json';


export const Information: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinate[]>(initialCoordinates360x640);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);
  const [top, setTop] = useState<number>(2);
  const [left, setLeft] = useState<number>(2);
  const [initialObjects, setInitialObjects] = useState<MyObject[]>([]);

  const newArray = coordinates.map(coord => ({ 
    ...coord, objLink: initialObjects.find(
      obj => obj.id === coord.id,
      )
    })
  )
  
  const openModal = (index: number, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedButton(index);
    setActiveButtonIndex(index);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const clickX = event.clientX;
    const clickY = event.clientY;

    if (clickX > screenWidth / 2) {
      setLeft(-180);
    } else {
      setLeft(10)
    }

    if (clickY > screenHeight / 2) {
      setTop(-125);
    } else {
      setTop(10);
    }
  };

  const closeModal = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
      setActiveButtonIndex(null);
    }
  };

  useEffect(() => {
    //fetching objects
    setInitialObjects(objectList);

    const updatedCoordinates = calculateCoordinates();
    setCoordinates(updatedCoordinates);

    const handleResize = () => {
      const updatedCoordinates = calculateCoordinates();
      setCoordinates(updatedCoordinates);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='info'>
      {newArray.map((coord: Coordinate, index: number) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: `${coord.x}px`,
            top: `${coord.y}px`,
          }}
        >
          
          <Button
            onClick={(event) => openModal(index, event)}
            isActive={activeButtonIndex === index}
            index={index}
            closeModal={closeModal}
          />

          <ModalWindow
            index={index}
            isOpen={selectedButton === index}
            top={top}
            left={left}
            name={coord.objLink?.name}
            explanation={coord.objLink?.explanation}
            closeModal={closeModal}
          />
        </div>
      ))}
    </div>
  );
};