
import { axiosInstance } from "@/shared/api/axios-instance";
import type { SearchPeopleResponse } from "../model/types";

export const fetchSearch = async (
  query: string
): Promise<SearchPeopleResponse> => {
  const resp = await axiosInstance.get<SearchPeopleResponse>(
      `/people?name=${encodeURIComponent(query)}`
  );
  return resp.data;
}