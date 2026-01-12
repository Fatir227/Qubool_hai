import Layout from "@/components/Layout";
import DecorativeHeader from "@/components/DecorativeHeader";
import FeatureCard from "@/components/FeatureCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Heart, Camera, Music, Sparkles, Users, Gift } from "lucide-react";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-maroon-900 to-maroon-800 text-cream overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-islamic-green-600/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-4 py-32 md:py-40 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 z-10 text-center lg:text-left">
            {/* Decorative accent */}
            <div className="text-gold-500 text-4xl md:text-5xl mb-6 font-script">
              ✨ Begin Your Journey ✨
            </div>

            {/* Main heading */}
            <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight">
              Eternal
              <span className="text-gold-400 block">Union</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gold-300 font-script mb-8">
              Celebrating Love, Honoring Tradition
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <div className="h-1 w-8 bg-gold-500"></div>
              <div className="text-gold-500 font-script text-xl">❦</div>
              <div className="h-1 w-8 bg-gold-500"></div>
            </div>

            {/* Description */}
            <p className="text-cream/90 text-lg mb-8 max-w-lg leading-relaxed">
              Experience the perfect blend of Arabian elegance and modern sophistication.
              We create unforgettable wedding moments that honor tradition and celebrate love.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gold-500 text-maroon-900 px-8 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-gold-400 transition-colors shadow-lg">
                Book Now
              </button>
              <button className="border-2 border-gold-500 text-gold-400 px-8 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-gold-500/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Featured Image */}
          <div className="flex-1 z-10">
            <div className="relative">
              {/* Frame decoration */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gold-600 to-gold-400 rounded-lg blur opacity-30"></div>
              <div className="relative bg-maroon-800 rounded-lg overflow-hidden border-4 border-gold-500 shadow-2xl">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F8f49c59097614fd9a7f8f00c29caaf7d%2F61ed3ffe8a46403fb2d88b39a4641ed6?format=webp&width=800"
                  alt="Arabian Wedding Theme"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative corner elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500 rounded-lg opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-islamic-green-600 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-cream section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Welcome to Eternal Union"
            subtitle="Where Tradition Meets Elegance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            {/* Content */}
            <div>
              <p className="text-maroon-700 text-lg leading-relaxed mb-6">
                At Eternal Union, we believe that every wedding is a unique love story deserving of
                a beautiful, memorable celebration. Our passion lies in creating Arabian-themed
                weddings that beautifully blend Islamic traditions with contemporary elegance.
              </p>

              <p className="text-maroon-700 text-lg leading-relaxed mb-6">
                With meticulous attention to detail and deep respect for cultural traditions,
                we design every aspect of your special day to reflect your personality and values.
                From intimate ceremonies to grand celebrations, we bring your vision to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-gold-600 text-2xl mt-1">✓</div>
                  <div>
                    <h4 className="font-serif font-bold text-maroon-900 mb-2">Customized Designs</h4>
                    <p className="text-maroon-600 text-sm">
                      Every detail tailored to your preferences and cultural traditions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold-600 text-2xl mt-1">✓</div>
                  <div>
                    <h4 className="font-serif font-bold text-maroon-900 mb-2">Expert Team</h4>
                    <p className="text-maroon-600 text-sm">
                      Experienced professionals dedicated to perfection
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-gold-600 text-2xl mt-1">✓</div>
                  <div>
                    <h4 className="font-serif font-bold text-maroon-900 mb-2">Stress-Free Planning</h4>
                    <p className="text-maroon-600 text-sm">
                      Let us handle the details while you enjoy the journey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-maroon-50 to-gold-50 rounded-lg h-96 flex items-center justify-center border-4 border-maroon-200">
                <div className="text-center">
                  <div className="text-6xl text-gold-400 mb-4">💍</div>
                  <p className="text-maroon-600 font-script text-xl">Eternal Union</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-maroon-50 section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Our Services"
            subtitle="Complete Wedding Solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Heart />}
              title="Wedding Planning"
              description="Comprehensive planning services from concept to execution, ensuring every moment is perfect."
            />

            <FeatureCard
              icon={<Camera />}
              title="Photography"
              description="Stunning professional photography capturing every precious moment of your celebration."
            />

            <FeatureCard
              icon={<Music />}
              title="Entertainment"
              description="Curated entertainment including live music, DJs, and traditional performers."
            />

            <FeatureCard
              icon={<Sparkles />}
              title="Decor & Design"
              description="Luxurious decorations featuring Islamic geometric patterns and gold accents."
            />

            <FeatureCard
              icon={<Users />}
              title="Guest Management"
              description="Professional coordination of guest accommodations, transportation, and logistics."
            />

            <FeatureCard
              icon={<Gift />}
              title="Catering"
              description="Delicious traditional and contemporary cuisine prepared by expert chefs."
            />
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="bg-cream section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Gallery"
            subtitle="Moments of Love & Elegance"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative overflow-hidden rounded-lg border-2 border-maroon-200 hover:border-gold-500 transition-all group cursor-pointer h-64"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-300 to-gold-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💍</div>
                    <p className="text-maroon-900 font-serif font-bold">Event {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-maroon-900 text-cream px-8 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-maroon-800 transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-maroon-50 section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="What Our Clients Say"
            subtitle="Stories of Joy & Love"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Eternal Union made our wedding day absolutely magical. Every detail was perfect and our guests are still talking about it!"
              author="Fatima & Ahmed"
              title="Married Couple"
            />

            <TestimonialCard
              quote="The professionalism and creativity of the team was outstanding. They transformed our vision into reality beyond our expectations."
              author="Aisha Khan"
              title="Wedding Client"
            />

            <TestimonialCard
              quote="From planning to execution, everything was seamless. The attention to detail and cultural sensitivity was remarkable."
              author="Hassan & Sarah"
              title="Married Couple"
            />
          </div>
        </div>
      </section>

      {/* Wedding Packages Section */}
      <section className="bg-cream section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Wedding Packages"
            subtitle="Choose Your Perfect Celebration"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PackageCard
              name="Elegance"
              price="৳50,000"
              description="A classic Arabian wedding experience with essential services"
              features={[
                "Venue coordination",
                "Basic decoration",
                "Photography (4 hours)",
                "50 guest catering",
                "Music DJ services",
              ]}
            />

            <PackageCard
              name="Majesty"
              price="৳100,000"
              description="Premium package with enhanced services and coverage"
              features={[
                "Full venue design",
                "Luxury decoration",
                "Photography + Videography (8 hours)",
                "100 guest catering",
                "Live band + DJ",
                "Guest transportation",
              ]}
              highlighted
            />

            <PackageCard
              name="Royal"
              price="৳200,000"
              description="Ultimate experience with comprehensive luxury services"
              features={[
                "Complete custom design",
                "Premium decoration & florals",
                "Photography + 4K Video + Drone",
                "Unlimited catering",
                "Live band + DJ + Entertainment",
                "Full logistics & coordination",
                "Guest accommodations",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-cream py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-6xl font-script">❦</div>
          <div className="absolute bottom-10 left-10 text-6xl font-script">❦</div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="text-gold-400 text-4xl md:text-5xl font-script mb-4">
            ✨
          </div>

          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4">
            Ready to Start Your Journey?
          </h2>

          <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable Arabian-themed wedding celebration.
            Contact us today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold-500 text-maroon-900 px-10 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-gold-400 transition-colors shadow-lg">
              Book Consultation
            </button>

            <button className="border-2 border-gold-500 text-gold-400 px-10 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-gold-500/10 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-12 border-t border-maroon-700">
            <p className="text-cream/70 text-sm">
              📞 +1 (555) 123-4567 • 📧 hello@eternalunion.com
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
