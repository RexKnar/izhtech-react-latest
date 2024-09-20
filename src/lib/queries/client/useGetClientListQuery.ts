import { makeAPICall } from "../../api";
// import { TestimonialsModel } from "../../domains/testimonials";
import { GET_ALL_CLIENTS } from "../../endpoints";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

function getAllClientsListQuery(
  options?: Partial<UseQueryOptions>
) {
  return {
    ...options,
    queryKey: [GET_ALL_CLIENTS],
    queryFn: async () => {
      return await makeAPICall(GET_ALL_CLIENTS, {}, {}, {});
    },
  };
}
export function useGetAllClientsListQuery(
  options?: Partial<UseQueryOptions>
) {
  return useQuery(getAllClientsListQuery(options));
}
