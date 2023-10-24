import React from 'react';
import './Button.scss';
import classNames from 'classnames';

type ButtonProps = {
  index: number;
  isActive?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => void;
  closeModal: (index: number) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick, isActive, closeModal, index }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isActive) {
      closeModal(index);
    } else {
      onClick(event, index);
    }
  };

  return (
    <div
      className={classNames('round-button', { 'active': isActive })}
      onClick={handleClick}
    >
    </div>
  );
};
