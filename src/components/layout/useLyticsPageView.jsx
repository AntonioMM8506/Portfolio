import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLyticsPageView = () => {
  const location = useLocation();

  useEffect(() => {
    // Trigger Lytics page view on route change
    if (window.jstag) {
      window.jstag.pageView();
    }
  }, [location.pathname]); // Trigger whenever the pathname changes
};

export default useLyticsPageView;