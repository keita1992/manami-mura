import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  Grid,
  Box,
  styled,
} from '@mui/material';
import Image from 'next/image';

import SectionLayout from '@/components/layout/SectionLayout';
import { Constants } from '@/utils/constants';

const HeaderCell = styled(TableCell)(({ theme }) => ({
  border: 'none',
}));

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1.3rem',  // デフォルトのフォントサイズ
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',  // md ブレークポイント以上でのフォントサイズ
  },
  border: 'none',
}));

const HeaderChip = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '0.5rem 0.8rem',
  borderRadius: '0.5rem'
}));

export const About = () => {
  return (
    <SectionLayout id="about" title="開催概要">
      <Grid container sx={{ textAlign: 'center' }} alignItems={`center`}>
        {/* 概要画像 */}
        <Grid item xs={12} sm={6} sx={{ my: 2, textAlign: { sm: 'right' } }}>
          <Image src="/about.png" width={400} height={400} alt="イベント概要" />
        </Grid>
        {/* テーブル */}
        <Grid item xs={12} sm={6} sx={{ my: 3, textAlign: { sm: 'left' } }}>
          <Table sx={{ maxWidth: '600px' }}>
            <TableBody>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>開催時間</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  <Box>11/10(金) 19:00〜20:00</Box>
                  <Box>11/11(土) 10:00〜20:00</Box>
                  <Box>11/12(日) 10:00〜20:00</Box>
                </BodyCell>
              </TableRow>
              <TableRow>
                <HeaderCell component="td" align="right">
                  <HeaderChip>開催場所</HeaderChip>
                </HeaderCell>
                <BodyCell component="td">
                  <a
                    href={Constants.HALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OZ studio渋谷東
                  </a>
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
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
