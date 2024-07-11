'use client';
import { Nunito } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const nunito = Nunito({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
});

export default theme;