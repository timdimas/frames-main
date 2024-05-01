import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function ProgramsCarousel() {
    return (
        <div
            id="programs"
            className="w-full flex flex-col items-center justify-center my-24 overflow-hidden"
        >
            <h2 className="text-center text-3xl font-bold mb-4">
                Our Programs
            </h2>
            <Carousel
                opts={{
                    align: "center",
                }}
                className="w-2/3 md:w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-start flex-col">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Placeholder"
                                            width={100}
                                            height={100}
                                            className="w-full"
                                        />
                                        <span className="text-xl font-semibold">
                                            {index + 1}
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
