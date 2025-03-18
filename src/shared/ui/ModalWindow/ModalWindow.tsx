import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  CrossIcon,
  StyledCloseButton,
  StyledModalButton,
  StyledModalWindow,
  StyledOverflow,
} from './ModalWindow.style';
import { ModalContent } from './ModalContent';

interface Props {
  children?: React.ReactNode;
}

export const ModalWindow: FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <StyledModalButton onClick={() => setShowModal(true)}>{children}</StyledModalButton>

      {showModal &&
        createPortal(
          <StyledOverflow>
            <StyledModalWindow>
              <StyledCloseButton onClick={() => setShowModal(false)}>
                <CrossIcon src="/icons/cross.svg" alt="close" />
              </StyledCloseButton>
              <ModalContent onChangeFilter={() => setShowModal(false)} />
            </StyledModalWindow>
          </StyledOverflow>,
          document.body,
        )}
    </div>
  );
};
