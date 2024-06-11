import Desktop from './Desktop';
import Settings from './Settings';
import { motion, AnimatePresence } from 'framer-motion';

const MainVariants = {
  initial: {
    y: '100%', 
    scaleX: 0.2, 
    opacity: 1, 
  },
  in: {
    y: 0, // Move to the center of the screen
    scaleX: 1, // Stretch to full width
    opacity: 1, // Fade in
  },
  out: {
    y: '-100%', // Exit off-screen at the top (optional)
    scaleX: 0.2, // Scale down horizontally (optional)
    opacity: 1, // Fade out (optional)
  }
};

const MainTransition = {
  duration: 0.15, // Duration of the transition
  ease: "easeInOut" // Easing function
};

const MotionWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={MainVariants}
    transition={MainTransition} 
  >
    {children}
  </motion.div>
);

const MainView = ({ view }) => (
  <div id="main" >
    <AnimatePresence mode='wait'>
      {view === 'desktop' && (
        <MotionWrapper key="desktop"><Desktop /></MotionWrapper>
      )}
      {view === 'settings' && (
        <MotionWrapper key="settings"><Settings /></MotionWrapper>
      )}
    </AnimatePresence>
  </div>
);


export default MainView;