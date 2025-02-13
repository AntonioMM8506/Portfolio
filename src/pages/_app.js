import '@/styles/globals.css';
import Layout from '@/components/layout/index';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; // Use Next.js's router

// Custom hook to track page views with Lytics
const useLyticsPageView = () => {
  const router = useRouter();

  useEffect(() => {
    // Function to trigger Lytics page view
    const handleRouteChange = () => {
      if (window.jstag) {
        window.jstag.pageView();
      }
    };

    // Track page view on initial load
    handleRouteChange();

    // Track page views on route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]); // Re-run effect when router.events changes
};

export default function App({ Component, pageProps }) {
  // Use the Lytics page view hook
  useLyticsPageView();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}