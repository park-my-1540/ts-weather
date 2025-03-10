import { atom } from 'recoil';

const modalState = atom<{
  isOpen: boolean;
  message: string;
}>({
  key: 'modalState',
  default: {
    isOpen: false,
    message: '',
  },
});

export default modalState;
