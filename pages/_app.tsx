import '@/styles/globals.css'
import { Container } from '@mui/material';
import type { AppProps } from 'next/app'
import styles from "@/styles/App.module.css";
import Head from 'next/head';
import { ThemeConfig } from '@/config/theme.config';
import NavBar from '@/components/NavBar';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div > 
    <Head>
      <title key="title">Next JS Countries App</title>
      <meta name="description" key="description" content="NextJS crash course by Coding in Flow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
        <NavBar/>
        <Container className={styles.pageContainer}>
        <ThemeConfig>
        <Component {...pageProps} />
        </ThemeConfig>
        </Container>
    </div>
  )
}
