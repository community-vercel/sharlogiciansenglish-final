import Image from "next/image";
import Link from "next/link";
import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

   
const ServiceThreeHome = ({column,service}) => {
    const serverurl=process.env.NEXT_PUBLIC_DJANGO_URL;

        const ServiceContent = service?.slice(0 , service?.length);
        const aiDevService = ServiceContent.find(val => val.slug === "ai-development");
    
        // Filter out "ai-development" from the rest and take the first (5) others
        const filteredServices = ServiceContent
            .filter(val => val.slug !== "ai-development")
            .slice(0, 5);
        
        // Combine "ai-development" service with the other 5
 const finalServices = aiDevService 
 ? [aiDevService, ...filteredServices] 
 : filteredServices.slice(0, 6);

        
        return(

            
            <>
                    <div className="row">
                    {finalServices?.slice(0, 6).map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <Link href={`/services/${val.slug}`}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {/* <imgs rc={serverurl+val.image} /> */}
                                        {val?.image &&
                                        <Image src={serverurl+val.image} width={49} height={49} alt={val?.slug}/>
}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                </>
        )
    }

export default ServiceThreeHome;
