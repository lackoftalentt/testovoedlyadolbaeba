import type { PersonDetail } from "../model/types";
import axios from "axios";

export const personDetailsApi = {
    getPersonDetails: async (url: string) => {
        const response = await axios.get<{ result: PersonDetail }>(url);
        return response.data.result;
    }
}

