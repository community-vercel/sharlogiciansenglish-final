
import React from "react";

import QuoteForm from "../components/QuoteForm";

export async function fetchInitialdetails() {
  try {
    const serverurls = process.env.NEXT_PUBLIC_DJANGO_URLS;
    const response = await fetch(`${serverurls}get-home-detail/`);
    if (!response.ok) {
      console.error("Failed to fetch metadata:", response.status);
      return null; // Or throw an error
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return null; // Or throw an error
  }
}

export default async function Page() {
  const initialData = await fetchInitialdetails();
console.log(initialData);
  // if (!initialData) {
  //   return <div>Error loading data</div>;
  // }

  return <QuoteForm data={initialData }  />
  
}




