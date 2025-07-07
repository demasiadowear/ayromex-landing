import '../styles/globals.css';

export const metadata = {
  title: 'AYROMEX SRL',
  description: 'Contenitore strategico per progetti digitali, AI e automazione',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
