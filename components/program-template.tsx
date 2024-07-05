import React, { FC } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import {
    BlocksRenderer,
    type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { tokens } from "@/locales/tokens";
import { useTranslation } from "react-i18next";

type ProgramProps = {
    title: string | undefined;
    description?: string;
    richText: BlocksContent;
    coverImage?: string;
};

export const ProgramTemplate: FC<ProgramProps> = ({
    title,
    description,
    richText,
    coverImage,
}) => {
    const { t } = useTranslation();

    return (
        <div>
            <div
                className="h-[25vh] rounded-tl-[2em] rounded-br-[2em] flex flex-col gap-3 justify-center items-center mb-12"
                style={{
                    backgroundImage: "url('/programs/blurry_background.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-4xl font-bold text-primary">{title}</h1>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link
                                aria-label="Go To Home"
                                className="text-primary hover:underline"
                                href="/"
                            >
                                {t(tokens.common.home)}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-black">
                                {title}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <BlocksRenderer
                content={richText}
                blocks={{
                    paragraph: ({ children }) => (
                        <p className="text-neutral900 pb-2">{children}</p>
                    ),
                    heading: ({ children, level }) => {
                        switch (level) {
                            case 1:
                                return (
                                    <h1 className="text-5xl font-bold text-primary dark:text-white py-6">
                                        {children}
                                    </h1>
                                );
                            case 2:
                                return (
                                    <h2 className="text-4xl font-bold text-primary dark:text-white py-6">
                                        {children}
                                    </h2>
                                );
                            case 3:
                                return (
                                    <h3 className="text-2xl font-bold text-primary dark:text-white py-3">
                                        {children}
                                    </h3>
                                );
                            case 4:
                                return (
                                    <h4 className="text-xl font-bold text-primary dark:text-white py-3">
                                        {children}
                                    </h4>
                                );
                            case 5:
                                return (
                                    <h5 className="text-lg font-bold text-primary dark:text-white py-3">
                                        {children}
                                    </h5>
                                );
                            case 6:
                                return (
                                    <h6 className="text-md font-bold text-primary dark:text-white py-3">
                                        {children}
                                    </h6>
                                );
                            default:
                                return (
                                    <h1 className="text-4xl font-bold text-primary dark:text-white py-6">
                                        {children}
                                    </h1>
                                );
                        }
                    },
                    link: ({ children, url }) => {
                        return (
                            <Link
                                className="text-secondary hover:underline"
                                href={url}
                                target={"_blank"}
                            >
                                {children}
                            </Link>
                        );
                    },
                    list: ({ children, format }) => {
                        if (format === "ordered") {
                            return (
                                <ol className="marker:text-primary list-decimal list-inside space-y-3">
                                    {children}
                                </ol>
                            );
                        } else {
                            return (
                                <ul className="marker:text-primary list-disc list-inside space-y-3">
                                    {children}
                                </ul>
                            );
                        }
                    },
                    image: ({ image }) => {
                        return (
                            <Image
                                src={image?.url}
                                width={image.width}
                                height={image.height}
                                alt={image.alternativeText || ""}
                                className="w-full h-60 object-cover rounded-lg my-3"
                            />
                        );
                    },
                }}
            />
        </div>
    );
};
