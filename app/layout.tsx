import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme";
import Header from "@/components/Header";
import { CssBaseline } from "@mui/material";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Devima - Admin Panel",
  description: "Orders Dashboard with Detail View",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Header />
                  {children}
              </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
