import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group hover:shadow-xl transition-all duration-300">
      {/* Card container with gradient border effect */}
      <div className="bg-cream rounded-lg p-8 h-full border-2 border-gold-200 hover:border-gold-400 transition-colors">
        {/* Icon container */}
        <div className="mb-6 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-cream group-hover:scale-110 transition-transform duration-300">
            <div className="text-2xl">{icon}</div>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif font-bold text-maroon-900 text-xl mb-3 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-maroon-700 text-center text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
