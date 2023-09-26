import Image from 'next/image';

import { useAppSelector } from '@/stores';
import { getIsMobile } from '@/stores/ui';

export const Firstview = () => {
  const isMobile = useAppSelector(getIsMobile);

  return (
    <Image
      src={isMobile ? '/main-sp.jpg' : '/main-pc.jpg'}
      width={isMobile ? 400 : 1920}
      height={isMobile ? 565 : 960}
      alt="メインビジュアル"
      layout="responsive"
    />
  );
};
