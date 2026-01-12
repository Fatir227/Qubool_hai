import Layout from "@/components/Layout";
import DecorativeHeader from "@/components/DecorativeHeader";

export default function FAQ() {
  return (
    <Layout>
      <section className="bg-cream section-padding">
        <div className="container mx-auto text-center">
          <DecorativeHeader
            title="Frequently Asked Questions"
            subtitle="Common Questions About Our Services"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border-4 border-maroon-200 p-12">
              <div className="text-6xl text-gold-500 font-script mb-6">❓</div>
              <h2 className="font-serif font-bold text-3xl text-maroon-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-maroon-700 text-lg mb-6 leading-relaxed">
                We're preparing a comprehensive FAQ section to answer all your questions about
                our services, packages, and wedding planning process.
              </p>
              <p className="text-gold-600 font-serif text-sm">
                Have questions in the meantime? Please reach out to us and we'll be happy to help!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
