import React, { useEffect, useState } from 'react';
import './Information.scss';
import { Button } from '../Button/Button';
import { ModalWindow } from '../ModalWinndow/ModalWindow';
import { calculateCoordinates } from '../../helpers/calculateCoordinates';
import { Coordinate } from '../../types/Coordinate';
import { initialCoordinates360x640 } from '../../api/coord360x640';
import { MyObject } from '../../types/singleObject';


export const Information: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinate[]>(initialCoordinates360x640);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);
  const [top, setTop] = useState<number>(2);
  const [left, setLeft] = useState<number>(2);
  const [initialObjects, setInitialObjects] = useState<MyObject[]>([]);

  //fetching objects 
  const getData = () => {
    fetch('/objectList.json')
      .then(function (response) {
        return response.json();
      })
      .then(setInitialObjects)
  }
  //end fetching
  
  //searching for propper ids
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
      setLeft(-100);
    } else {
      setLeft(4)
    }

    if (clickY > screenHeight / 2) {
      setTop(-50);
    } else {
      setTop(5);
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
    getData()
    //end fetching

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

  console.log(newArray)

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