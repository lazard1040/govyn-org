interface HeroSectionProps {
  title: string;
  subtitle?: string;
  showCTAs?: boolean;
}

export default function HeroSection({ title, subtitle, showCTAs = false }: HeroSectionProps) {
  return (
    <section className="bg-navy text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
          <span className="text-gold">{title}</span>
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        {showCTAs && (
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="/tutoring" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
              Schedule Tutoring
            </a>
            <a href="/tax-services" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
              Book Tax Services
            </a>
            <a href="/bookstore" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
              Shop Books
            </a>
            <a href="/contact" className="bg-white/10 text-white border border-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-200">
              Contact Gregory
            </a>
            <a href="/consulting" className="bg-white/10 text-white border border-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-200">
              Start a Business Consultation
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
