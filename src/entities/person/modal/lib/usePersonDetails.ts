import { useQuery } from "@tanstack/react-query";
import { personDetailsApi } from "../api/personDetailsApi";

export const usePersonDetails = (url: string) => {
  return useQuery({
      queryKey: ['person-details', url],
      queryFn: () => personDetailsApi.getPersonDetails(url),
      enabled: !!url
  });
};
