
import { Box } from '@mui/material';

import SectionLayout from '@/components/layout/SectionLayout';
import { MessageText } from '@/components/typography/Home/Message/MessageText';

const MESSAGE1 = `フォトグラファー「茉那実」とフラワーアーティスト「むら」による、コラボレーション展示会を開催致します。`;
const MESSAGE2 = `2回目となる今回は、シュールさの中に感じる可愛らしさの追求をテーマに、色味やプロップなどにこだわって撮影した写真を、その世界観を表現した空間と共に展示いたします。当日は、お花の販売や、ノベルティの配布も行いますので、ぜひご来場ください。`;

export const Message = () => {
  return (
    <SectionLayout id="message" title="message">
      <Box sx={{ margin: '0 auto', width: { xs: '70%', md: '40%' } }} >
        <MessageText text={MESSAGE1} />
        <br />
        <MessageText text={MESSAGE2} />
      </Box>
    </SectionLayout >
  );
};
