import axios from "axios";

const fetcher = async (url: string) => {
    try {
        const headers = {
            // Authorization: process.env.API_TOKEN,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "application/json",
        };
        const response = await axios.get(url, {
            headers,
        });

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default fetcher;