// App.tsx
import { motion } from 'framer-motion';
import { device } from '@/styles/style.css';
import Setting from '@/components/setting/Setting';
import Modal from '@/components/modal/Modal';

export default function Home() {
  return (
    <motion.div
      key="setting"
      initial={{ opacity: 0.5, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 1, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className={device}>
        <Setting />
        <Modal />
      </div>
    </motion.div>
  );
}
