import classNames from 'classnames';
import './ModalWindow.scss';
import { useEffect, useRef } from 'react';

type Props = {
  index: number;
  isOpen: boolean;
  top: number;
  left: number;
  name?: string;
  explanation?: string;
  closeModal: (index: number) => void;
}

export const ModalWindow: React.FC<Props> = ({
  index, isOpen, top, left, name, explanation, closeModal
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target as Node)) {
        const isButtonClick = event.target instanceof HTMLElement && event.target.classList.contains('round-button');
        if (!isButtonClick) {
          closeModal(index);
        }
      }
    };

    if (isOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal, index]);


  return isOpen ? (
    <div
      className={classNames('modal', { 'modal-open': isOpen })}
      style={{ top, left }}
      ref={modalRef}
    >
      <div className="modal-content">
        <div className="modal__content-container">
          <h2 className="modal__name">{name}</h2>
          <p className="modal__explanation">{explanation}</p>
        </div>
      </div>
    </div>
  ) : null;
};
