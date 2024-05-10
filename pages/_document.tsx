import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="scroll-smooth" lang="en">
            <Head />
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased"
                )}
            >
                <Main />
                <NextScript />
                <script
                    src="https://website-widgets.pages.dev/dist/sienna.min.js"
                    defer
                ></script>
            </body>
        </Html>
    );
}
