import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import { Metrika } from '@/components/Metrika';
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://msk-abscess.vercel.app'),
    title: 'Лечение абсцесса — быстрое и безопасное вскрытие в клинике',
    description: 'Профессиональное лечение абсцесса без осложнений. Современные методы, опытные врачи, приём без очередей. Обратитесь вовремя!',
    keywords: ['лечение абсцесса, лечение абсцесса в москве, лечение абсцессов, экстренная госпитализация при абсцессе, лечение гнойных абсцессов, лечение абсцесса мягких тканей, хирургическое лечение абсцесса, лечение подкожного абсцесса, лечение параректального абсцесса, платная госпитализация, гнойная хирургия москва, срочное лечение абсцесса, лечение абсцессов в клиниках москвы.'],
    other: {
        ['yandex-verification']: '11ec5139d7152f53',
    },
    openGraph: {
        title: 'Лечение абсцессов в Москве | Медицинская Сервисная Компания. 8 (499) 719-81-00, 24/7',
        description: 'Организация экстренной и плановой госпитализации для лечения абсцессов в ведущих клиниках Москвы. Быстрая диагностика, хирургическое и консервативное лечение, сопровождение пациента 24/7.',
        images: ['/images/banner2.webp'],
        url: 'https://msk-abscess.vercel.app',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box
                    className="container"
                    sx={{
                        userSelect: 'none' /* ОТКЛЮЧЕНИЕ ВЫДЕЛЕНИЯ ТЕКСТА НА САЙТЕ */
                    }}
                >
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika />
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
