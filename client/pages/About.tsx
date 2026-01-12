import Layout from "@/components/Layout";
import DecorativeHeader from "@/components/DecorativeHeader";

export default function About() {
  return (
    <Layout>
      <section className="bg-cream section-padding">
        <div className="container mx-auto text-center">
          <DecorativeHeader
            title="About Eternal Union"
            subtitle="Our Story & Vision"
          />

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border-4 border-maroon-200 p-12">
              <div className="text-6xl text-gold-500 font-script mb-6">✨</div>
              <h2 className="font-serif font-bold text-3xl text-maroon-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-maroon-700 text-lg mb-6 leading-relaxed">
                We're working on bringing you more details about our story, vision, and the team
                behind Eternal Union. Check back soon for inspiring content about how we create
                unforgettable Arabian wedding experiences.
              </p>
              <p className="text-gold-600 font-serif text-sm">
                In the meantime, feel free to explore our other pages or contact us directly!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
