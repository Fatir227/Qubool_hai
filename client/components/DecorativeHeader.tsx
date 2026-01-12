interface DecorativeHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function DecorativeHeader({
  title,
  subtitle,
  centered = true,
}: DecorativeHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {/* Top decorative divider */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="h-1 w-8 bg-gold-500"></div>
        <div className="text-gold-500 font-script text-xl">✤</div>
        <div className="h-1 w-8 bg-gold-500"></div>
      </div>

      {/* Title */}
      <h2 className="font-serif font-bold text-maroon-900 text-4xl md:text-5xl mb-2">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-maroon-600 font-script text-xl md:text-2xl mb-6">
          {subtitle}
        </p>
      )}

      {/* Bottom decorative divider */}
      <div className="flex items-center justify-center gap-3 mt-6 mb-8">
        <div className="h-1 w-6 bg-islamic-green-600"></div>
        <div className="text-islamic-green-600">◆</div>
        <div className="h-1 w-6 bg-islamic-green-600"></div>
      </div>
    </div>
  );
}
