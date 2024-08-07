import { useEffect, useMemo, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    type CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import programsAPI from "@/api/programs";
import { useSettings } from "@/hooks/use-settings";

export function ProgramsCarousel({ result }: { result: any }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const settings = useSettings();

    const filteredPrograms = useMemo(() => {
        if (!result) {
            return [];
        }

        return result.filter((program: any) => {
            return program?.attributes?.locale === settings.language;
        });
    }, [settings.language]);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div
            id="programs"
            className="w-full flex flex-col items-center justify-center pt-24 mb-24"
        >
            <h2 className="text-center text-3xl font-bold mb-4">
                Our Programs
            </h2>
            <Carousel
                opts={{
                    align: "center",
                }}
                setApi={setApi}
                className="w-2/3 md:w-full max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl"
            >
                <CarouselContent>
                    {filteredPrograms?.map((program: any, index: string) => (
                        <CarouselItem
                            key={program?.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <Link
                                className="h-full block"
                                href={`/programs/${program?.id}`}
                            >
                                <Card className="h-full">
                                    <CardContent className="flex aspect-square items-start justify-start flex-col p-0 ">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Placeholder"
                                            width={100}
                                            height={100}
                                            className="w-full rounded-t-xl"
                                        />
                                        <div className="p-2 px-3 flex flex-col gap-2">
                                            <h3 className="text-xl text-start tracking-normal">
                                                {program?.attributes?.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                12 Feb 2023
                                            </p>
                                            <p className="text-truncate text-muted-foreground line-clamp-[7]">
                                                {program?.attributes?.summary}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <div className="flex justify-center mt-4 w-full">
                    {Array.from(Array(count).keys()).map((i) => (
                        <Button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`mx-1 h-1.5 w-10 rounded-full p-0  ${
                                i === current - 1
                                    ? "hover:bg-primary bg-primary"
                                    : "bg-neutral-600/75"
                            }`}
                            onClick={() => api?.scrollTo(i)}
                        />
                    ))}
                </div>
            </Carousel>
        </div>
    );
}
