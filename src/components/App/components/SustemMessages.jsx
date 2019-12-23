import React from 'react';
import { useAppStore } from 'components/App';
import Snack from 'shared/components/Snack';

const SustemMessages = () => {
  const {
    store: {
      modal: { isModal, message, variant },
    },
  } = useAppStore();

  return <Snack isOpen={isModal} message={message} variant={variant} />;
};

export default SustemMessages;
