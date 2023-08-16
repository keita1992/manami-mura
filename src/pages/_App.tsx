import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import { Provider } from 'react-redux';

import theme from '@/libs/theme';
import { store } from '@/stores';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>gleaming with flowers | manami&mura</title>
          <meta name="description" content="gleaming with flowers" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
