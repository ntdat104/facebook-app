import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import store from '@/redux/store';
import ThemeProvider from '@/contexts/ThemeContext';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
