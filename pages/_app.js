import '../styles/globals.css';
import { NextGtag } from 'next-gtag';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextGtag trackingId='GTM-MF5LB4V' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
