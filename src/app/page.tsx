import Link from "next/link";

const services = [
  {
    title: "Math Tutoring",
    description: "Expert math instruction for grades 5 through college. ACT/SAT prep, algebra, geometry, and statistics.",
    icon: "📐",
    href: "/tutoring",
  },
  {
    title: "Tax Services",
    description: "Professional tax preparation for individuals, self-employed, and small businesses.",
    icon: "📊",
    href: "/tax-services",
  },
  {
    title: "Publishing",
    description: "Poetry collections, educational workbooks, and the R&B Bible Series.",
    icon: "📚",
    href: "/bookstore",
  },
  {
    title: "Business Consulting",
    description: "LLC formation, startup planning, budgeting, branding, and entrepreneur coaching.",
    icon: "💼",
    href: "/consulting",
  },
  {
    title: "Speaking",
    description: "Inspiring talks on education, financial literacy, entrepreneurship, and leadership.",
    icon: "🎤",
    href: "/speaking",
  },
  {
    title: "Resources",
    description: "Free worksheets, checklists, and planners to support your personal and financial growth.",
    icon: "📋",
    href: "/resources",
  },
];

const testimonials = [
  {
    name: "Marcus T.",
    text: "Gregory helped my son go from a D to a B+ in algebra. His patience and expertise made all the difference.",
    role: "Parent",
  },
  {
    name: "Shantel W.",
    text: "Filing my taxes used to stress me out every year. Gregory made the whole process smooth and I got my biggest refund ever.",
    role: "Client",
  },
  {
    name: "DeAndre J.",
    text: "I had a business idea but no clue where to start. Gregory walked me through everything from the LLC to the business plan.",
    role: "Entrepreneur",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section - Two Column */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
                <span className="text-gold">Building Legacy. Creating Opportunity. Empowering People.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto lg:mx-0 mb-8">
                Welcome to VYNCO, the official home of Lazard Legacy Enterprises. We provide education, financial services, publishing, consulting, and business solutions designed to help individuals, families, and entrepreneurs succeed.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                <a href="/tutoring" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Schedule Tutoring
                </a>
                <a href="/tax-services" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Book Tax Services
                </a>
                <a href="/bookstore" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Shop Books
                </a>
                <a href="/business-development" className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
                  Order Business Cards &amp; Flyers
                </a>
                <a href="/contact" className="bg-white/10 text-white border border-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-200">
                  Contact Gregory
                </a>
                <a href="/consulting" className="bg-white/10 text-white border border-gold px-6 py-3 rounded-lg font-semibold hover:bg-gold hover:text-navy transition-colors duration-200">
                  Start a Business Consultation
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-600/30">
                <img
                  src="/images/gregory-lazard-jr.png"
                  alt="Gregory Lazard Jr. — Founder & CEO, Lazard Legacy Enterprises"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-navy to-navy/80 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-gold font-serif text-lg">Gregory Lazard Jr.</p>
                <p className="text-gray-300 text-sm">Founder & CEO</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4">
                Meet Gregory Lazard Jr.
              </h2>
              <p className="text-gray-600 mb-4">
                Math Specialist, Tax Professional, Published Author, and Business Consultant.
                A native of New Orleans and proud graduate of Southern University at New Orleans,
                Gregory is dedicated to helping families build financial and educational success.
              </p>
              <p className="text-gray-600 mb-6">
                &ldquo;Dreams can come true. Better late than never.&rdquo;
              </p>
              <Link
                href="/about"
                className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
              >
                Learn More About Gregory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold text-center mb-12">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <p className="text-gray-300 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-gold font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
