import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Box,
  styled,
} from '@mui/material';

import SectionLayout from '@/components/layout/SectionLayout';

const HeaderCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
  width: '40%',
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1.0rem',  // デフォルトのフォントサイズ
  [theme.breakpoints.up('md')]: {
    fontSize: '1.1rem',  // md ブレークポイント以上でのフォントサイズ
  },
  border: 'none',
  color: theme.palette.text.primary,
  fontWeight: 200,
  width: '60%',
}));

const HeaderChip = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '0.5rem 0.8rem',
  borderRadius: '0.5rem',
  fontSize: '0.8rem',
}));

export const About = () => {
  return (
    <SectionLayout id="about" title="about">
      <Grid container alignItems={`center`}>
        {/* テーブル */}
        <Grid item xs={12}>
          <Table sx={{ margin: 'auto', width: { md: '50%' } }}>
            <TableBody>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>展示会名</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  Gleaming with flower 展
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>開催時間</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  <Box>11/10(金) 17:00〜21:00</Box>
                  <Box>11/11(土) 11:00〜21:00</Box>
                  <Box>11/12(日) 11:00〜19:00</Box>
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>開催場所</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  OZ studio渋谷東
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>最寄り駅</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  渋谷駅(徒歩6〜7分)
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>入場料</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  無料
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>注意事項</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  エレベータはありませんが、階段が1階から3階まで一直線なので負担は少ないかと思います。
                </BodyCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
