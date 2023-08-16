import { AppBar, Box, Toolbar, Container } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

import { NavText } from '@/components/typography/Home/Header/NavText';
import { PageTitleForPc } from '@/components/typography/Home/Header/PageTitleForPc';
import { PageTitleForSp } from '@/components/typography/Home/Header/PageTitleForSp';
import styles from '@/styles//home/Header.module.css';
import { Constants } from '@/utils/constants';

export const Header = () => {
  // 上部のナビゲーションバーのpositionをfixedにしているため、
  // リンクがクリックされた場合は動的にスクロールする
  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    sectionId: string,
    type: 'pc' | 'sp'
  ) => {
    e.preventDefault();
    // ナビゲーションバーの高さ
    const element = document.getElementById(sectionId);
    const offset = type === 'pc' ? 80 : 60;
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      sx={{ p: 1, backgroundImage: 'linear-gradient(45deg, #ccede2, #dacdc7)' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          {/* スマホタイトル */}
          <Box sx={{ textAlign: 'center' }}>
            <PageTitleForSp text={Constants.PAGE_TITLE} />
          </Box>

          {/* PC用メニュー */}
          <PageTitleForPc
            text={Constants.PAGE_TITLE}
            onClick={handleTitleClick}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Constants.SECTIONS.map((section) => (
              <Link
                key={section.name}
                href={section.id}
                passHref
                scroll={false}
              >
                <Box
                  className={styles.menuItem}
                  onClick={(e) => handleClick(e, section.id, 'pc')}
                  component="div"
                  sx={{
                    m: 2,
                    color: 'black',
                    display: 'block',
                    ':hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  <NavText text={section.name} />
                </Box>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
