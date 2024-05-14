import { ProgramTemplate } from "@/components/program-template";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import programsAPI from "@/api/programs";
import { Seo } from "@/components/seo";
import { useRouter } from "next/router";
import { GetStaticProps, InferGetStaticPropsType } from "next";

type Program = {
    id: number;
    attributes: {
        title: string;
        Description: string;
        Slug: string;
    };
} | null;

export const getStaticPaths = async () => {
    const res = await fetcher(`${config.api}/api/programs`);

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
    const { query } = useRouter();

    console.log(result, "A");
    // const {
    //     data: res,
    //     error,
    //     isLoading,
    // } = programsAPI().useProgram({
    //     id: query?.programName as string,
    //     populate: "*",
    // });
    // const { data: res, error, isLoading } = useSWR(`${config.api}/api/programs/1?populate=*`, fetcher);
    // console.log(res);
    // useEffect(() => {
    //     const getPrograms = async () => {
    //         try {
    //             const headers = {
    //                 // Authorization: process.env.API_TOKEN,
    //                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    //                 "Content-Type": "application/json",
    //             };
    //             const response = await axios.get(`${config.api}/api/programs/1`, {
    //                 headers,
    //             });

    //             console.log(response.data.data);
    //             setProgram(response.data.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     getPrograms();
    // }, []);

    // if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Seo
                title={result?.attributes?.seo[0]?.metaTitle || ""}
                description={result?.attributes?.seo[0]?.metaDescription || ""}
                keywords={result?.attributes?.seo[0]?.keywords || ""}
            />
            <div className="py-24 w-full container">
                <ProgramTemplate
                    title={result?.attributes?.title}
                    richText={result?.attributes?.content}
                />
            </div>
        </>
    );
}
