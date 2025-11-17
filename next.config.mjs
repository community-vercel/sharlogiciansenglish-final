/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store',
          },
        ],
      },
    ];
  },
  //  headers: [
  //   {
  //     key: "Content-Security-Policy",
  //     value: `
  //       default-src 'self';
  //       script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline';
  //       connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com;
  //       img-src 'self' https://www.googletagmanager.com https://www.google-analytics.com data:;
  //       style-src 'self' 'unsafe-inline';
  //       frame-src https://www.googletagmanager.com;
  //     `.replace(/\n/g, ""),
  //   },
  // ],
 
  // basePath: '/new', 
    images: {
      // domains: [ "community-hazel.vercel.app","sharplogicians.com","sharplogicians.com/new","sharplogicians.comundefined","localhost:3000/new","localhost:3002","127.0.0.1", "127.0.0.1:8000","picsum.photos"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.googleusercontent.com",
          port: "",
          pathname: "**",
        },
 
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.comundefined', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.comnull', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            
        
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com/api', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
    
            {
              protocol: 'http', // Specify protocol (e.g., 'http' or 'https')
              hostname: '127.0.0.1', // Specify domain name
              port: '8000', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
            {
              protocol: 'https', // Specify protocol (e.g., 'http' or 'https')
              hostname: 'sharplogicians.com"', // Specify domain name
              port: '', // Leave empty for default port
              pathname: '/**', // Allow all paths under this domain
            },
      ],
      
    },  
    
    experimental: {
      workerThreads: false,
      cpus: 1,
    },
    
  };
  
  export default nextConfig;
  
