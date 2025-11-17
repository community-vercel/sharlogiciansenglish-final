
import React from "react";

import Career from "../components/career";


export async function fetchInitialdetails() {
  const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;

  try {
    const [
      careerresponse
    ] = await Promise.all([
      fetch(`${serverurls}get-data/`),

    ]);

    const [
    career,
    
    ] = await Promise.all([
      careerresponse.json(),
      
    ]);

    return {
      career: career.career[0],
      data: career
      
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

  return <Career data={initialData }  />
  
}




