import {
    useQuery,
    UseQueryOptions,
    UseQueryResult,
  } from '@tanstack/react-query';
import { makeAPICall } from "../api";
import { ServicesModal } from "../domains/services";
import { GET_SERVICES_LIST } from "../endpoints";


  function getServiceList(options?:UseQueryOptions<ServicesModal[]>
                         ): UseQueryOptions<ServicesModal[]> {
            return {
                ...options,
                queryKey: [GET_SERVICES_LIST],
                queryFn: async () => {
                    return await makeAPICall<ServicesModal[]>(
                        GET_SERVICES_LIST
                    );
                  },
            }
  }
  export function useGetServicesListQuery(options?:UseQueryOptions<ServicesModal[]>
  ): UseQueryResult<ServicesModal[]>{
    return useQuery(getServiceList(options));
  }