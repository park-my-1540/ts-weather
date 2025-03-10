// App.tsx
import { motion } from 'framer-motion';
import { device } from '@/styles/style.css';
import Main from '@/components/Main/Main';

export default function Home() {
  return (
    <>
      <motion.div
        key="main"
        initial={{ opacity: 0.5, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <div className={device}>
          <Main />
        </div>
      </motion.div>
    </>
  );
}
