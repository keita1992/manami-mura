import { AppBar, Box, Toolbar, Container } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

import { NavText } from '@/components/typography/Home/Header/NavText';
import { PageTitleForPc } from '@/components/typography/Home/Header/PageTitleForPc';
import styles from '@/styles//home/Header.module.css';
import { Constants } from '@/utils/constants';

export const Header = () => {
  // 上部のナビゲーションバーのpositionをfixedにしているため、
  // リンクがクリックされた場合は動的にスクロールする
  const handleClick = (
    e: React.MouseEvent<HTMLElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    // ナビゲーションバーの高さ
    const element = document.getElementById(sectionId);
    const offset = 80;
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
      sx={{ backgroundImage: 'linear-gradient(45deg, #ccede2, #dacdc7)', display: { xs: 'none', md: 'inherit' } }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center' }}>
          {/* PC用メニュー */}
          <PageTitleForPc
            text={Constants.PAGE_TITLE}
            onClick={handleTitleClick}
          />
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            {Constants.SECTIONS.map((section) => (
              <Link
                key={section.name}
                href={section.id}
                passHref
                scroll={false}
              >
                <Box
                  className={styles.menuItem}
                  onClick={(e) => handleClick(e, section.id)}
                  component="div"
                  sx={{
                    m: 2,
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
