interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  image?: string;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  image,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 border-l-4 border-gold-500 shadow-lg hover:shadow-xl transition-shadow">
      {/* Quote */}
      <div className="mb-6">
        <div className="text-gold-500 text-4xl font-serif mb-3">"</div>
        <p className="text-maroon-700 italic text-lg leading-relaxed font-light">
          {quote}
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-14 h-14 rounded-full object-cover border-2 border-gold-500"
          />
        )}
        <div>
          <div className="font-serif font-bold text-maroon-900">
            {author}
          </div>
          <div className="text-sm text-gold-600 font-script">
            {title}
          </div>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold-500 text-sm">
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
