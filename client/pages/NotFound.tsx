import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="bg-cream section-padding min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <div className="text-9xl font-serif font-bold text-maroon-900 mb-4">
            404
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-4">
            Page Not Found
          </h1>

          <p className="text-xl text-maroon-700 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-1 w-8 bg-gold-500"></div>
            <div className="text-gold-500 font-script text-xl">❦</div>
            <div className="h-1 w-8 bg-gold-500"></div>
          </div>

          <Link
            to="/"
            className="inline-block bg-maroon-900 text-cream px-10 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-maroon-800 transition-colors shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
