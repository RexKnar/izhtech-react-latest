export type  ServiceBlockProps = 
{serviceName:string, description:string, imageSrc:string,navPath:string, listItem:ServiceBlockList[]};

export type ServiceBlockList = {
    title:string,
    description:string
}
