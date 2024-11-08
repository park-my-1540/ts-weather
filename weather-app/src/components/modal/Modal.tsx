import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "@/recoil/atoms/modalAtom";
import * as styles from '@/styles/components/modal.css';
import ModalAction from './ModalAction'

export default function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    ModalAction.initialize(setModal) //setModal 함수 전달
  }, [setModal]);

  if (!modal.isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{modal.message}</p>
      </div>
    </div>
  );
}