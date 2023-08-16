import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid } from '@mui/material';
import Image from 'next/image';

import SectionLayout from '@/components/layout/SectionLayout';
import styles from '@/styles/home/Artist.module.css';

export const Artist = () => {
  return (
    <SectionLayout id="artist" title="アーティスト">
      <Grid
        container
        alignItems={'center'}
        sx={{
          py: 5,
          width: '70%',
          margin: 'auto',
          gap: '20px 0',
        }}
      >
        {/* Manami */}
        <Grid item xs={12} md={6} sx={{ textAlign: `center` }}>
          <Image src="/manami.png" width={300} height={300} alt="manamin" />
          <h2 style={{ marginTop: 0 }}>Manami / Photographer</h2>
          <a
            className={styles.instagram__link}
            href="https://www.instagram.com/kei1992ta?ref=badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.instagram__icon}
              icon={faInstagram}
            />
            <span>follow manami</span>
          </a>
        </Grid>
        {/* Mura */}
        <Grid item xs={12} md={6} sx={{ textAlign: `center` }}>
          <Image src="/mura.png" width={300} height={300} alt="mura" />
          <h2 style={{ marginTop: 0 }}>Mura / Flower Artist</h2>
          <a
            className={styles.instagram__link}
            href="https://www.instagram.com/kei1992ta?ref=badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.instagram__icon}
              icon={faInstagram}
            />
            <span>follow mura</span>
          </a>
        </Grid>
      </Grid>
    </SectionLayout>
  );
};
