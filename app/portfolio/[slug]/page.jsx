import NotFound from "@/app/components/Notfound";
import PortfolioDetails from "@/app/components/PortfolioDetails";



export async function fetchInitialdetails(slug) {
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
 
 
  try {
    const formData = new FormData();
    formData.append("slug", slug);
const response = await fetch(`${serverurls}get-portfoliodetails/`, {
      method: "POST",

      body: formData,
    });
    if (!response.ok) {
      console.error("Failed to fetch properties:", response.statusText);
      return null;
    } 
    const data = await response.json();

// console.log("data",response)
//     const result = await response.json();


    

    return data;

  } catch (error) {
    console.error("An error occurred while fetching properties:", error);
    return null;
  }
}

export default async function Page({ params }) {
  const { slug } = await params

  const initialservice = await fetchInitialdetails(slug);

  if(!initialservice){
    return(
<NotFound />
    )
  }

  return <PortfolioDetails portfolio ={initialservice}  />;
}




