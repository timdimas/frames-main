import { HeroFigure } from "./hero-figure";
import { Button } from "@/components/ui/button";
import { FlipWords } from "./ui/flip-words";
import { useTranslation } from "react-i18next";
import { tokens } from "@/locales/tokens";

export const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <>
            <div id="about-us"></div>
            <div className="py-16 flex flex-col items-center">
                <p className="text-center uppercase">What we believe in</p>
                <FlipWords
                    className="text-center text-3xl font-bold mt-2"
                    words={[
                        t(tokens.flipWords.quality),
                        t(tokens.flipWords.innovation),
                        t(tokens.flipWords.inclusion),
                        t(tokens.flipWords.emprowerment),
                        t(tokens.flipWords.community),
                        t(tokens.flipWords.sustainability),
                        t(tokens.flipWords.guidance),
                        t(tokens.flipWords.support),
                        t(tokens.flipWords.education),
                    ]}
                />

                <div className="flex items-center justify-center w-2/3 border-b-2 border-b-secondary my-4 rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-0">
                <HeroFigure
                    title="Who we are"
                    imgSrc={"/main-img.webp"}
                    reverse
                    description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                    btnText="Learn More"
                />
                <HeroFigure
                    title="What We Do"
                    imgSrc={"/main-img.webp"}
                    description="Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
                    btnText="Learn More"
                />
            </div>
        </>
    );
};
