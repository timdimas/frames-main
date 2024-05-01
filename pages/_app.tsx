import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SettingsProvider } from "@/contexts/settings-context";
import "@/locales/i18n";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";

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
                <Toaster />
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </SettingsProvider>
    );
}
