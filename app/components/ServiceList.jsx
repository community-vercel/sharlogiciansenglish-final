import Image from "next/image";
import Link from "next/link";
import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";




        
const ServiceThree = ({column,service}) => {
    const serverurl=process.env.NEXT_PUBLIC_DJANGO_URL;

        const ServiceContent = service.slice(0 , service?.length);

        
        return(
            <>
                    <div className="row">
                    {ServiceContent?.map( (val , i) => (
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

export default ServiceThree;
