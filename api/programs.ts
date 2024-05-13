import config from "@/config";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

type ProgramSearch = {
    id?: string;
    populate?: string;
    programName?: string;
}

const programsAPI = () => {
  
    const usePrograms = () => {
        const { data, error, isLoading } = useSWR(`${config.api}/api/programs`, fetcher);
        return { data, error, isLoading };
    }

    const useProgram = ({id, populate, programName}: ProgramSearch) => {
        const { data, error, isLoading } = useSWR(`${config.api}/api/programs/${id}?populate=${populate}&slug=${programName}`, fetcher);
        return { data, error, isLoading };
    }

    return { usePrograms, useProgram };
}

export default programsAPI;