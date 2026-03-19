import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'S.O.S Narguilé | Cartão Interativo',
  description: 'Cartão interativo institucional premium da S.O.S Narguilé com acesso rápido ao site, contato, horários e localização.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
