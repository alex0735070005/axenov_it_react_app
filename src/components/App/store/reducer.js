export const SHOW_SUSTEM_MODAL = 'SHOW_SUSTEM_MODAL';
export const HIDE_SUSTEM_MODAL = 'HIDE_SUSTEM_MODAL';

export const initialState = {
  modal: {
    isModal: false,
    variant: 'info',
    message: '',
  },
};

export default (state, action) => {
  switch (action.type) {
    case SHOW_SUSTEM_MODAL: {
      const { variant, message } = action.payload;
      return {
        ...state,
        modal: {
          isModal: true,
          variant,
          message,
        },
      };
    }

    case HIDE_SUSTEM_MODAL: {
      return {
        ...state,
        modal: {
          ...initialState.modal,
          isModal: false,
        },
      };
    }

    default:
      return state;
  }
};
