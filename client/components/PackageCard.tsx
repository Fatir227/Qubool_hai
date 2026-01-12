interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PackageCard({
  name,
  price,
  description,
  features,
  highlighted = false,
}: PackageCardProps) {
  return (
    <div className={`h-full ${highlighted ? "md:scale-105 md:-mt-4" : ""}`}>
      <div
        className={`rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 ${
          highlighted
            ? "bg-gradient-to-br from-maroon-800 to-maroon-900 border-2 border-gold-500 shadow-2xl"
            : "bg-cream border-2 border-maroon-200 hover:border-gold-400"
        }`}
      >
        {/* Header */}
        <div
          className={`p-8 text-center ${
            highlighted
              ? "bg-gold-500 text-maroon-900"
              : "bg-maroon-50 text-maroon-900"
          }`}
        >
          <h3 className="font-serif font-bold text-2xl mb-2">{name}</h3>
          {highlighted && (
            <div className="text-xs font-bold uppercase tracking-widest text-maroon-700 mt-2">
              Most Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`p-8 flex-grow ${highlighted ? "text-cream" : ""}`}>
          {/* Price */}
          <div className="mb-6 text-center">
            <div
              className={`text-4xl font-bold font-serif ${
                highlighted ? "text-gold-300" : "text-gold-600"
              }`}
            >
              {price}
            </div>
            <div
              className={`text-sm mt-2 ${
                highlighted ? "text-cream/80" : "text-maroon-600"
              }`}
            >
              per event
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-center text-sm mb-6 leading-relaxed ${
              highlighted ? "text-cream/90" : "text-maroon-700"
            }`}
          >
            {description}
          </p>

          {/* Divider */}
          <div className="h-1 w-8 mx-auto mb-6 bg-gold-500"></div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 text-sm ${
                  highlighted
                    ? "text-cream/90"
                    : "text-maroon-700"
                }`}
              >
                <span className="text-gold-500 font-bold mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <div className="p-8 pt-0">
          <button
            className={`w-full py-3 font-serif font-bold uppercase tracking-wide rounded-lg transition-all duration-300 ${
              highlighted
                ? "bg-gold-500 text-maroon-900 hover:bg-gold-400"
                : "bg-maroon-800 text-cream hover:bg-maroon-900 border-2 border-maroon-800 hover:border-gold-500"
            }`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
