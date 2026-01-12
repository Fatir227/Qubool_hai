import Layout from "@/components/Layout";
import DecorativeHeader from "@/components/DecorativeHeader";

export default function Gallery() {
  return (
    <Layout>
      <section className="bg-cream section-padding">
        <div className="container mx-auto text-center">
          <DecorativeHeader
            title="Our Gallery"
            subtitle="Moments of Love & Elegance"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border-4 border-maroon-200 p-12">
              <div className="text-6xl text-gold-500 font-script mb-6">🎞️</div>
              <h2 className="font-serif font-bold text-3xl text-maroon-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-maroon-700 text-lg mb-6 leading-relaxed">
                We're currently curating a stunning collection of our most beautiful Arabian
                wedding celebrations. Our full gallery of high-resolution images and videos
                showcasing our previous events will be available soon.
              </p>
              <p className="text-gold-600 font-serif text-sm">
                For a preview of our work, please contact us directly and we'll be happy to share
                our portfolio with you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
