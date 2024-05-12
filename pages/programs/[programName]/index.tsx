import { ProgramTemplate } from "@/components/program-template";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "@/config";

type Program = {
    id: number;
    attributes: {
        Title: string;
        Description: string;
        Slug: string;
    };
} | null;

export default function Page() {
    const [program, setProgram] = useState<Program>(null);
    useEffect(() => {
        const getPrograms = async () => {
            try {
                const headers = {
                    // Authorization: process.env.API_TOKEN,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
                    "Content-Type": "application/json",
                };
                const response = await axios.get(`${config.api}/api/programs/1`, {
                    headers,
                });

                console.log(response.data.data);
                setProgram(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        getPrograms();
    }, []);
    return (
        <div className="py-24 w-full container">
            <ProgramTemplate title={program?.attributes?.Title} />
        </div>
    );
}
