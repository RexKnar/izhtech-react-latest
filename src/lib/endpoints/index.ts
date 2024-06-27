import { EndpointDetails } from "./type";


export const GET_SERVICES_LIST = `GET_SERVICES`;
export const GET_SERVICES_BY_ID =`GET_SERVICES_BY_ID`;


export default <EndpointDetails>{
    [GET_SERVICES_LIST]:{
        requestType: `GET`,
        endpoint:`/api/services`,
      },
      [GET_SERVICES_BY_ID]:{
        requestType: `GET`,
        endpoint: `/api/services/[id]`
      },
}
 