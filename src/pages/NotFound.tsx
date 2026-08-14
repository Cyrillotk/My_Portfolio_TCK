import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Helmet>
        <title>Page Not Found | Tata Cyril Kunta</title>
        <meta
          name="description"
          content="This page does not exist. Head back to the homepage to explore Tata Cyril Kunta's frontend development and AI portfolio."
        />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="Page Not Found | Tata Cyril Kunta" />
        <meta
          property="og:description"
          content="This page does not exist. Head back to the homepage to explore the portfolio."
        />
      </Helmet>
      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/80">
          Return to Home
        </a>
      </main>
    </div>
  );
};

export default NotFound;
