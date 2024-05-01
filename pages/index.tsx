import { Inter } from "next/font/google";
import { useTheme } from "next-themes";
import Hero from "@/components/hero-component";
import Navbar from "@/components/navbar";
import { HeroFigure } from "@/components/hero-figure";
import { AboutUs } from "@/components/about-us";
import { ProgramsCarousel } from "@/components/programs-carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");

        document.documentElement.classList.remove(
            theme === "light" ? "light" : "dark"
        );
        document.documentElement.classList.add(
            theme === "light" ? "dark" : "light"
        );
    };

    return (
        <>
            <Hero />
            <main className="container mx-auto">
                <AboutUs />
                <ProgramsCarousel />
            </main>
        </>
    );
}
