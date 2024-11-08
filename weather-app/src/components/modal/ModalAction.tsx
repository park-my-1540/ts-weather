interface ModalActionProps {
  isOpen: boolean; 
  message: string
}

class ModalAction {
  private setModal: (value : ModalActionProps) => void;

  constructor(){
    this.setModal = () => {};
  }

  initialize(setModal: (value: ModalActionProps) => void) {
    this.setModal = setModal;
  }

  open(message : string) {
    this.setModal({isOpen : true, message});
    setTimeout(() => {
      this.setModal({isOpen: false, message: ""})
    },2000);
  }
}

const Modal = new ModalAction();
export default Modal;