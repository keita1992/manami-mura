import { config } from '@fortawesome/fontawesome-svg-core'
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import { Provider } from 'react-redux';

import theme from '@/libs/theme';
import { store } from '@/stores';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>Gleaming with flower 展 | 茉那実&むら</title>
          <meta name="description" content="gleaming with flower" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="apple-touch-icon"
            href="/apple-touch-icon.png"
            type="image/png"
            sizes="180x180"
          />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
