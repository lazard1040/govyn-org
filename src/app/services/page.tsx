import HeroSection from "@/components/HeroSection";
import Link from "next/link";

const services = [
  {
    title: "Math Tutoring",
    description: "Expert math instruction for grades 5 through college. Specializing in ACT/SAT Math, College Algebra, Geometry, and Statistics. Available online and in-person.",
    icon: "📐",
    href: "/tutoring",
    features: ["Grades 5–College", "ACT/SAT Prep", "Online & In-Person", "Personalized Plans"],
  },
  {
    title: "Tax Services",
    description: "Professional tax preparation for individuals, self-employed workers, and small businesses. Amended returns and year-round tax planning available.",
    icon: "📊",
    href: "/tax-services",
    features: ["Individual Returns", "Self-Employed", "Small Business", "Tax Planning"],
  },
  {
    title: "Bookstore",
    description: "Poetry collections, the R&B Bible Series, educational workbooks, and signed collector editions by Gregory Lazard Jr.",
    icon: "📚",
    href: "/bookstore",
    features: ["Poetry", "R&B Bible Series", "Workbooks", "Signed Editions"],
  },
  {
    title: "Business Consulting",
    description: "Complete business formation and growth guidance. From LLC setup to branding strategy and entrepreneur coaching.",
    icon: "💼",
    href: "/consulting",
    features: ["LLC Formation", "Startup Planning", "Branding", "Coaching"],
  },
  {
    title: "Speaking Engagements",
    description: "Inspiring presentations on education, financial literacy, entrepreneurship, motivation, and leadership.",
    icon: "🎤",
    href: "/speaking",
    features: ["Education", "Financial Literacy", "Entrepreneurship", "Leadership"],
  },
  {
    title: "Free Resources",
    description: "Downloadable worksheets, checklists, and planners to support your educational, financial, and personal goals.",
    icon: "📋",
    href: "/resources",
    features: ["Budget Worksheets", "Tax Checklists", "Study Planners", "Goal Trackers"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive solutions for education, finance, publishing, and business growth."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-light-gray text-navy text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
