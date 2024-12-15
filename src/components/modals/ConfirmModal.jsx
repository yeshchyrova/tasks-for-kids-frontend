import React from 'react'
import { ModalWrapper } from './ModalWrapper';

export const ConfirmModal = ({closeFn, submitFn}) => {
  return (
    <ModalWrapper onclose={closeFn}>
      <p>Confirm task</p>
    </ModalWrapper>
  );
}
