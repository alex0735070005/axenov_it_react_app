import { getItem, setItem } from 'shared/localStorage';

export const SHOW_SUSTEM_MODAL = 'SHOW_SUSTEM_MODAL';
export const HIDE_SUSTEM_MODAL = 'HIDE_SUSTEM_MODAL';
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

export const initialState = {
  modal: {
    isModal: false,
    variant: 'info',
    message: '',
  },
  user: getItem('user'),
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

    case SET_USER: {
      const { user } = action.payload;
      console.log(user);
      setItem('user', user);

      return {
        ...state,
        user,
      };
    }

    case CLEAR_USER: {
      setItem('user', '');

      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};
