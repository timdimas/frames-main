import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import Hero from "@/components/hero-component";
import Navbar from "@/components/navbar";
import { HeroFigure } from "@/components/hero-figure";
import { AboutUs } from "@/components/about-us";
import { ProgramsCarousel } from "@/components/programs-carousel";
import { Seo } from "@/components/seo";
import { useTranslation } from "react-i18next";
import { tokens } from "@/locales/tokens";
import OurServices from "@/components/our-services";
import programsAPI from "@/api/programs";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import useSWR from "swr";
import config from "@/config";
import fetcher from "@/lib/fetcher";

export const getStaticProps = (async (context) => {
    const res = await fetcher(`${config.api}/api/programs?locale=all`);

    const result = res.data || null;
    return { props: { result } };
}) satisfies GetStaticProps<{
    result: any;
}>;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function Home({
    result,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { theme, setTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <>
            <Seo
                title={t(tokens.seo.mainTitle)}
                description={t(tokens.seo.mainDescription)}
                keywords={t(tokens.seo.mainKeywords)}
            />
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <main>
                <Hero />
                <div className="container px-1">
                    <AboutUs />
                    <OurServices />
                    <ProgramsCarousel result={result} />
                </div>
            </main>
        </>
    );
}
