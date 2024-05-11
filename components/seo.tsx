import Head from "next/head";

import { FC } from "react";

type SeoProps = {
    title: string;
    description?: string;
    keywords?: string;
};

export const Seo: FC<SeoProps> = (props) => {
    const { title, description, keywords } = props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
        </Head>
    );
};
