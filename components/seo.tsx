import Head from "next/head";

import { FC } from "react";

type SeoProps = {
    title: string;
};

export const Seo: FC<SeoProps> = (props) => {
    const { title } = props;

    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};
