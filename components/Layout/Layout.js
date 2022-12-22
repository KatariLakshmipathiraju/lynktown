/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          LynkTown - Best Social Commerce Platform for buying and selling
          products.
        </title>

        <meta
          name='description'
          content='LynkTown is an easy-to-use Social Commerce Platform for buying and selling. Create one link for multiple products. Stay organized & easily manage your orders.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
