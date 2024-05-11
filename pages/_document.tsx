import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth" lang="en">
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <body className={cn("min-h-screen bg-background font-sans antialiased")}>
                <Main />
                <NextScript />
                <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
            </body>
        </Html>
    );
}
