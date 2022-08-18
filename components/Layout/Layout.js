/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Head from 'next/head';
import Script from 'next/script';

const Layout = ({ children }) => {
  // useEffect(()=>{
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments)};
  //   gtag('js', new Date());
  //   gtag('config', 'G-TTP5FCW4FD');
  // },[])
  return (
    <>
      <Script
        id='googletagmanager-js'
        src='https://www.googletagmanager.com/gtag/js?id=G-TTP5FCW4FD'
      />
      <Head>
        <title>LynkTown</title>

        <meta
          name='google-site-verification'
          content='2yo2OS7PnxSDhBmhGnE54wC83Lsl4doztBNsbMaxpds'
        />

        <meta
          name='description'
          content='A Revolutionary way of social Buying & Selling'
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
