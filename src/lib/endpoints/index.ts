import { EndpointDetails } from "./type";


export const GET_SERVICES_LIST = `GET_SERVICES`;
export const GET_POST_LIST = `GET_POST_LIST`;
export const GET_CATEGORY_LIST = `GET_CATEGORY_LIST`;
export const GET_CONTACT_LIST = `GET_CONTACT_LIST`;


export default <EndpointDetails>{
    [GET_SERVICES_LIST]:{
        requestType: `GET`,
        endpoint:`/api/services`,
      },
      [GET_POST_LIST]: {
        requestType: `GET`,
        endpoint: `/api/post`,
      },
      [GET_CATEGORY_LIST]: {
        requestType: `GET`,
        endpoint: `/api/admin/category`,
      },
      [GET_CONTACT_LIST]: {
        requestType: `POST`,
        endpoint: `/api/contact`,
      },
}
