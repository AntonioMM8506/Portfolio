import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Global flag to track initialization
let isWidgetInitialized = false;

const PathforaMessage = () => {
  const router = useRouter();
  const targetPage = '/projects'; // Page where the message should appear

  const initializePathfora = () => {
    if (!window.pathfora) {
      console.warn('Pathfora not loaded yet. Retrying...');
      setTimeout(initializePathfora, 500);
      return;
    }

    // Ensure this runs only on the /projects page
    if (router.pathname !== targetPage) {
      console.log('Not on target page, skipping Pathfora initialization.');
      return;
    }

    // Check if the widget is already initialized
    if (isWidgetInitialized) {
      console.log('Widget already initialized. Skipping initialization.');
      return;
    }


    // Initialize Pathfora widget
    const module = new window.pathfora.Message({
      id: 'sample-message-campaign',
      layout: 'slideout',
      position: 'bottom-left',
      theme: 'dark',
      headline: 'Hello there!',
      msg: 'Thanks a lot for having interest in my projects. More of them arec comming soon!',
    });

    // Register the widget only if it hasn't been initialized
    window.pathfora.initializeWidgets({ target: [{ segment: 'anonymous_profiles', widgets: [module] }] });

    // Mark as initialized
    isWidgetInitialized = true;
  };

  const removePathforaWidget = () => {
    const widget = document.getElementById('sample-message-campaign');
    if (widget) {
      console.log('Removing Pathfora widget...');
      widget.remove(); 
      isWidgetInitialized = false; 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initializePathfora();
    
    }

    // Listen for route changes
    const handleRouteChange = (url) => {
      if (url !== targetPage) {
        removePathforaWidget(); // Remove widget when navigating away
      } else {
        initializePathfora(); // Reinitialize when coming back
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Reset initialization state on page refresh
    const handleBeforeUnload = () => {
      isWidgetInitialized = false; // Reset the global flag
      removePathforaWidget(); // Remove the widget
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [router.pathname]); // Runs when route changes

  return null;
};

export default PathforaMessage;