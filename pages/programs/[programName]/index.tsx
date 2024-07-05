import { ProgramTemplate } from "@/components/program-template";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import config from "@/config";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import programsAPI from "@/api/programs";
import { Seo } from "@/components/seo";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useSettings } from "@/hooks/use-settings";

type Program = {
    id: number;
    attributes: {
        title: string;
        Description: string;
        Slug: string;
    };
} | null;

export const getStaticPaths = async () => {
    const res = await fetcher(`${config.api}/api/programs?locale=all`);

    const result = res.data || null;
    const paths = result.map((program: any) => ({
        params: { programName: program.id.toString() },
    }));

    // { fallback: false } means other routes should 404
    return { paths, fallback: false };
};

export const getStaticProps = (async (context) => {
    const res = await fetcher(
        `${config.api}/api/programs/${
            context?.params?.programName || ""
        }?populate=*`
    );

    const result = res?.data || null;
    return { props: { result } };
}) satisfies GetStaticProps<{
    result: any;
}>;

export default function Page({
    result,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const settings = useSettings();

    const program = useMemo(() => {
        return (
            result.attributes.localizations.data.find(
                (l: any) => l?.attributes?.locale === settings.language
            ) || result
        );
    }, [settings.language]);

    return (
        <>
            <Seo
                title={program?.attributes?.seo?.[0]?.metaTitle || ""}
                description={
                    program?.attributes?.seo?.[0]?.metaDescription || ""
                }
                keywords={program?.attributes?.seo?.[0]?.keywords || ""}
            />
            <div className="py-24 w-full container">
                <ProgramTemplate
                    title={program?.attributes?.title}
                    richText={program?.attributes?.content}
                />
            </div>
        </>
    );
}
