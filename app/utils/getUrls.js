export function getUrl() {
    if (process.env.NODE_ENV === "production") {
      return "https://sharplogicians.com"; // Replace with your production domain
    } else {
      return "http://localhost:3000"; // Local development
    }
  }