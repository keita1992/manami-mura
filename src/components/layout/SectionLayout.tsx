import { Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

import useOnScreen from '@/hooks/useOnScreen';

import { SectionTitle } from '../typography/Home/global/SectionTitle';

type Props = {
  children: React.ReactNode;
  id: string;
  title: string;
};

const SectionLayout = (props: Props) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // 一度 "visible" ステートに遷移したら、それ以降は何もしない（非表示に戻さない）
  useEffect(() => {
    if (onScreen) {
      controls.start('visible');
    }
  }, [controls, onScreen]);

  return (
    <Box id={props.id} sx={{ py: 2, my: 2, textAlign: 'center' }}>
      <SectionTitle text={props.title} />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {props.children}
      </motion.div>
    </Box>
  );
};

export default SectionLayout;
