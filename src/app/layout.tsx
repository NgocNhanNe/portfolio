import type { Metadata } from 'next';
import { Poppins, Dela_Gothic_One } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: '400',
  variable: '--font-poppins',
  subsets: ['latin']
});

const delaGothicOne = Dela_Gothic_One({
  weight: '400',
  variable: '--font-dela-gothic-one',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Ocean Nguyen',
  description: 'Lets get started with my workspace',
  icons: '../../public/logo.png'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/logo.png'
        />
      </head>
      <body className={`${delaGothicOne.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
