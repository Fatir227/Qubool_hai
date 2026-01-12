import Layout from "@/components/Layout";
import DecorativeHeader from "@/components/DecorativeHeader";
import FeatureCard from "@/components/FeatureCard";
import {
  Heart,
  Camera,
  Music,
  Sparkles,
  Users,
  Gift,
  Clock,
  MapPin,
  Zap,
  Palette,
} from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "Wedding Planning",
      icon: <Heart />,
      description:
        "From the very first conversation to the final dance, we handle every aspect of your wedding planning with meticulous attention to detail.",
      details: [
        "Comprehensive wedding timeline and checklist",
        "Budget planning and management",
        "Vendor selection and coordination",
        "Ceremony and reception design",
        "Timeline optimization for the day of event",
        "Day-of coordination and management",
      ],
    },
    {
      title: "Photography & Videography",
      icon: <Camera />,
      description:
        "Our award-winning photographers capture every precious moment with artistic excellence and cultural sensitivity.",
      details: [
        "Pre-wedding photoshoots",
        "Full-day event coverage",
        "Professional 4K videography",
        "Drone coverage and aerial shots",
        "Creative editing and retouching",
        "Digital and printed albums",
      ],
    },
    {
      title: "Venue & Decoration",
      icon: <Sparkles />,
      description:
        "Transform any space into a magical Arabian palace with our stunning decoration and design services.",
      details: [
        "Venue selection assistance",
        "Custom floral arrangements",
        "Islamic geometric pattern designs",
        "Gold and cream color theming",
        "Lighting design and setup",
        "Table settings and centerpieces",
      ],
    },
    {
      title: "Catering & Beverages",
      icon: <Gift />,
      description:
        "Delight your guests with authentic and contemporary culinary experiences prepared by our expert chefs.",
      details: [
        "Traditional Arabian cuisine",
        "Modern fusion menus",
        "Dietary accommodation planning",
        "Beverage and bar service",
        "Dessert and pastry selection",
        "Service staff coordination",
      ],
    },
    {
      title: "Entertainment & Music",
      icon: <Music />,
      description:
        "Create unforgettable memories with curated entertainment options from traditional to contemporary.",
      details: [
        "Live band performances",
        "DJ and dance floor management",
        "Traditional musicians",
        "Entertainment acts and dancers",
        "Sound system and acoustics",
        "Playlist curation and management",
      ],
    },
    {
      title: "Guest Management",
      icon: <Users />,
      description:
        "Ensure every guest feels welcome and comfortable throughout your celebration with our coordination services.",
      details: [
        "Guest list management",
        "Invitation design and distribution",
        "Accommodation arrangements",
        "Transportation coordination",
        "Parking and valet services",
        "Guest experience planning",
      ],
    },
  ];

  const packages = [
    {
      name: "Day Coordination",
      duration: "6-8 hours",
      price: "৳10,000",
      description: "Day-of coordination only",
      features: [
        "Timeline management",
        "Vendor coordination",
        "Setup and breakdown",
        "On-site problem solving",
      ],
    },
    {
      name: "Full Planning",
      duration: "3-6 months",
      price: "৳35,000",
      description: "Complete planning service",
      features: [
        "All coordination services",
        "Venue selection",
        "Vendor management",
        "Budget planning",
        "Design assistance",
      ],
    },
    {
      name: "Premium Planning",
      duration: "6-12 months",
      price: "৳75,000",
      description: "Luxury full-service planning",
      features: [
        "Complete custom design",
        "Luxury vendor partnerships",
        "International coordination",
        "VIP guest services",
        "Exclusive experiences",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-maroon-900 to-maroon-800 text-cream py-20 md:py-32">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="text-gold-400 text-5xl font-script mb-4">✨</div>
          <h1 className="font-serif font-bold text-5xl md:text-6xl mb-4">
            Our Services
          </h1>
          <p className="text-cream/90 text-xl max-w-2xl mx-auto">
            Comprehensive wedding services tailored to create your perfect Arabian celebration
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="bg-cream section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Complete Wedding Solutions"
            subtitle="Everything You Need for Your Perfect Day"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {serviceCategories.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-maroon-200 hover:border-gold-400 overflow-hidden transition-all group"
              >
                {/* Header with icon */}
                <div className="bg-gradient-to-r from-maroon-800 to-maroon-900 p-8 text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-cream mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-2xl">{service.icon}</div>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-cream">
                    {service.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-maroon-700 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6 pb-6 border-b-2 border-maroon-200">
                    <h4 className="font-serif font-bold text-maroon-900 mb-3 text-sm">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-maroon-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-gold-600 font-bold mt-0.5">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-maroon-900 text-cream py-3 font-serif font-bold rounded-lg hover:bg-maroon-800 transition-colors uppercase text-sm tracking-wide">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="bg-maroon-50 section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Planning Packages"
            subtitle="Choose Your Perfect Service Level"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-maroon-200 overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 p-8 text-center">
                  <h3 className="font-serif font-bold text-2xl mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wide">
                    {pkg.duration}
                  </p>
                </div>

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-serif font-bold text-maroon-900 mb-2">
                      {pkg.price}
                    </div>
                    <p className="text-maroon-600 text-sm">{pkg.description}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-serif font-bold text-maroon-900 mb-4">
                      Package Includes:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="text-maroon-700 text-sm flex items-start gap-3"
                        >
                          <span className="text-gold-600 text-lg">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-maroon-900 text-cream py-3 font-serif font-bold rounded-lg hover:bg-maroon-800 transition-colors uppercase text-sm tracking-wide">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream section-padding">
        <div className="container mx-auto">
          <DecorativeHeader
            title="Why Choose Eternal Union"
            subtitle="Our Commitment to Excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="text-maroon-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Years of Experience
                  </h3>
                  <p className="text-maroon-700">
                    Over a decade of expertise in planning and executing Arabian-themed
                    weddings with perfection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="text-maroon-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Local & Global Reach
                  </h3>
                  <p className="text-maroon-700">
                    Based in Bangalore with experience in multiple locations, we bring
                    our expertise wherever your celebration takes place.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="text-maroon-900 w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Efficient Execution
                  </h3>
                  <p className="text-maroon-700">
                    Our streamlined processes and experienced team ensure smooth,
                    stress-free planning and execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-islamic-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-cream w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Cultural Sensitivity
                  </h3>
                  <p className="text-maroon-700">
                    Deep respect for Islamic traditions and Arabian culture guides
                    every decision we make.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-islamic-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="text-cream w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-maroon-700">
                    A personal dedicated team for your wedding, ensuring personalized
                    attention and care throughout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-islamic-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Palette className="text-cream w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-maroon-900 text-lg mb-2">
                    Creative Excellence
                  </h3>
                  <p className="text-maroon-700">
                    Award-winning design team bringing innovative ideas while
                    respecting traditional aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-maroon-900 to-maroon-800 text-cream py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-6xl font-script">❦</div>
          <div className="absolute bottom-10 left-10 text-6xl font-script">❦</div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-cream/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create your perfect Arabian wedding experience.
          </p>

          <button className="bg-gold-500 text-maroon-900 px-10 py-4 font-serif font-bold uppercase tracking-wider rounded-lg hover:bg-gold-400 transition-colors shadow-lg">
            Schedule Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
