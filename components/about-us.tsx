import { HeroFigure } from "./hero-figure";
import { Button } from "@/components/ui/button";

export const AboutUs = () => {
    return (
        <>
            <div id="about-us"></div>
            <div className="py-16">
                <p className="text-center uppercase">What we believe in</p>
                <h3 className="text-center text-3xl font-bold mt-2">
                    Our Values
                </h3>
                <div className="flex items-center justify-center w-full border-b border-b-accent my-4"></div>
            </div>
            <div className="flex flex-col items-center">
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
