import Ourservices from "./components/Ourservices";
import ImageFirstServiceBlock from "../../shared/components/ImageFirstServiceBlock";
import TextFirstServiceBlock from "../../shared/components/TextFirstServiceBlock";
import { ServiceBlockProps } from "../../shared/components/types/services";

export default function Services() {
  const brandingContent: ServiceBlockProps = {
    imageSrc: "images/servicepage/img.png",
    serviceName: "Branding",
    navPath: "",
    link:"/branding",
    description:
      "Craft resonant brand identities. Guide through elevated brand experiences.",
    listItem: [
      {
        title: "Creating Brand Identities",
        description:
          "Create powerful brand identities that connect with your audience",
      },
      {
        title: "Distinctive Spacing Design",
        description:
          "Develop a unique spacing strategy to guide people through an enhanced brand experience",
      },
      {
        title: "Elevated Brand Journey",
        description: ` Lead individuals through a refined brand experience that leaves a lasting impact`,
      },
    ],
  };

  const webAppContent: ServiceBlockProps = {
    imageSrc: "images/servicepage/img2.png",
    serviceName: "Web Application",
    navPath: "",
    link:"/webapplication",
    description:
      "Lead in digital solutions.Rewards drive continuous enterprise improvement.",
    listItem: [
      {
        title: "Progressive Digital Solutions",
        description:
          " Stay competitive in the digital world with our advanced solutions",
      },
      {
        title: "Regular Enterprise Reviews",
        description:
          "Conduct regular evaluations for businesses, offering rewards to encourage continuous improvement",
      },
    ],
  };

  const mobileAppContent: ServiceBlockProps = {
    imageSrc: "images/servicepage/img.png",
    serviceName: "Mobile Application",
    navPath: "",
    link:"/mobileapplication",
    description:
      "Master digital debts. Apps boost efficiency, elevate communication, engage customers.",
    listItem: [
      {
        title: "Digital Debt Management",
        description:
          "Regain complete control over your digital debts with our straightforward solutions",
      },
      {
        title: "Enhanced Digital Solutions",
        description:
          "Simplify your tasks with our apps that boost efficiency, improve communication, and enhance customer engagement",
      },
    ],
  };


  const digitalMarketingContent: ServiceBlockProps = {
    imageSrc: "images/servicepage/img2.png",
    serviceName: "Digital Marketing",
    navPath: "",
    link:"/digitalmarketing",
    description:
      "Using digital channels to connect brands with potential customers, fostering promotional activities.",
    listItem: [
      {
        title: " Improving Website Attractiveness",
        description:
          "Increase your website's appeal and attract leads with our digital marketing expertise",
      },
      {
        title: "Strategies to Improve Visibility",
        description:
          "Implement effective strategies to enhance your online visibility and reach a larger audience",
      },
      {
        title: "Engagement and Conversion Methods",
        description:
          "Use methods that encourage engagement and boost conversion rates for your business",
      }
    ],
  };
  return (
    
      <section className="px-5 mx-auto md:container md:px-5">
        <Ourservices />
        <ImageFirstServiceBlock {...brandingContent} />
        <TextFirstServiceBlock {...webAppContent} />
        <ImageFirstServiceBlock {...mobileAppContent} />
        <TextFirstServiceBlock {...digitalMarketingContent} />
      </section>

    
   
  );
}
