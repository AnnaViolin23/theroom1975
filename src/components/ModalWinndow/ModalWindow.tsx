import classNames from 'classnames';
import './ModalWindow.scss';
import { useEffect, useRef } from 'react';

type Props = {
  index: number;
  isOpen: boolean;
  closeModal: (index: number) => void;
  top: number;
  left: number;
  name?: string;
  explanation?: string;
}

export const ModalWindow: React.FC<Props> = ({
  index, isOpen, closeModal, top, left, name, explanation
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

  // console.log(explanation)

  return isOpen ? (
    <div
      className={classNames('modal', { 'modal-open': isOpen })}
      style={{ top, left }}
      ref={modalRef}
    >
      <div className="modal-content">
        {/* <span
          className="close-modal-button"
          onClick={closeModal}
        >
          &times;
        </span> */}
        <div className="modal__content-container">
          <h2 className="modal__name">{name}</h2>
          <p className="modal__explanation">{explanation}</p>
        </div>
      </div>
    </div>
  ) : null;
};
