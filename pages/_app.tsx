import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SettingsProvider } from "@/contexts/settings-context";
import "@/locales/i18n";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SettingsProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                value={{ light: "mytheme", dark: "dark" }}
            >
                <TooltipProvider>
                    <Toaster />
                    <Navbar />
                    <GoogleAnalytics trackPageViews />
                    <Component {...pageProps} />
                    <Footer />
                    <Analytics />
                </TooltipProvider>
            </ThemeProvider>
        </SettingsProvider>
    );
}
