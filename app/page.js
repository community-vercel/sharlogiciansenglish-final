
import CreativeLanding from "./components/Home";

export async function fetchInitialdetails() {
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  
  try {
    const [
      homeDetailResponse,
      servicesResponse,
      aboutUsResponse,
      portfolioResponse,
      teamResponse,
      testimonialsResponse,
      newsResponse,
      contactResponse,
      clientsResponse,
      countsResponse,
    ] = await Promise.all([
      fetch(`${serverurls}get-home-detail/`, { cache: 'no-store' }),
  fetch(`${serverurls}services/`, { cache: 'no-store' }),
  fetch(`${serverurls}about-us/`, { cache: 'no-store' }),
  fetch(`${serverurls}portfolio/`, { cache: 'no-store' }),
  fetch(`${serverurls}team/`, { cache: 'no-store' }),
  fetch(`${serverurls}testimonials/`, { cache: 'no-store' }),
  fetch(`${serverurls}news/`, { cache: 'no-store' }),
  fetch(`${serverurls}contact/`, { cache: 'no-store' }),
  fetch(`${serverurls}clients/`, { cache: 'no-store' }),
  fetch(`${serverurls}get-count/`, { cache: 'no-store' })
    ]);

    
    const [
      homeDetail,
      services,
      aboutUs,
      portfolio,
      team,
      testimonials,
      news,
      contact,
      clients,
      counts,
    ] = await Promise.all([
      homeDetailResponse.json(),
      servicesResponse.json(),
      aboutUsResponse.json(),
      portfolioResponse.json(),
      teamResponse.json(),
      testimonialsResponse.json(),
      newsResponse.json(),
      contactResponse.json(),
      clientsResponse.json(),
      countsResponse.json(),
    ]);
    const limitednews =news.data.slice(0, 9);

    return {
      homeDetail: homeDetail,
      services: services.data,
      aboutUs: aboutUs.data,
      portfolio: portfolio.data,
      team: team.data,
      testimonials: testimonials.data,
      news: limitednews,
      contact: contact.data,
      clients: clients.data,
      counts: counts.data,
      classname:"bg_images bg_images--26",
    };
  } catch (error) {
    console.error("An error occurred while fetching properties:", error);
    return null;
  }
}

export default async function Page() {
  const initialData = await fetchInitialdetails();

  if (!initialData) {
    return <div>Error loading data</div>;
  }

  return <CreativeLanding homeDetail={initialData}   />;
}




