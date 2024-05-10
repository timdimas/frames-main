import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type HeroFigureProps = {
    title?: string;
    description?: string;
    imgSrc: string | StaticImport;
    btnText?: string;
    reverse?: boolean;
};

export const HeroFigure: FC<HeroFigureProps> = ({
    title,
    description,
    imgSrc,
    btnText,
    reverse = false,
}) => {
    const reverseClass = reverse ? "order-first" : "";
    return (
        // <div className="w-full">
        //     <div className={`flex flex-col ${reverseClass} items-center gap-6`}>
        //         <Image
        //             src={imgSrc}
        //             alt="Who we are"
        //             className="rounded-lg shadow-2xl"
        //             width={550}
        //             height={500}
        //         />
        //         <div>
        //             <h2 className="text-5xl font-bold">{title}</h2>
        //             <p className="py-8 text-balance">{description}</p>
        //             <Button>{btnText}</Button>
        //         </div>
        //     </div>
        // </div>
        <section className="w-full py-2 md:py-12">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            {title}
                        </h3>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                </div>
                <Image
                    alt="Hero"
                    className={`mx-auto rounded-xl object-cover w-full sm:w-2/3 lg:w-full ${reverseClass} shadow-lg`}
                    height="350"
                    src="/main-img.webp"
                    width="350"
                />
            </div>
        </section>
    );
};
