import { Grid } from '@mui/material';

import SectionLayout from '@/components/layout/SectionLayout';
import { ConceptText } from '@/components/typography/Home/Concept/ConceptText';

const CONCEPT_TEXT = `この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。`;

export const Concept = () => {
  return (
    <SectionLayout id="concept" title="コンセプト">
      <Grid
        container
        padding={3}
        alignItems={`center`}
        justifyContent={`center`}
      >
        <Grid item xs={12} md={4} />
        <Grid
          item
          container
          xs={12}
          md={4}
          sx={{ direction: 'rtl' }}
          justifyContent={`center`}
        >
          <ConceptText text={CONCEPT_TEXT} />
        </Grid>
        <Grid item xs={12} md={4} />
      </Grid>
    </SectionLayout>
  );
};
