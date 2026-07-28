import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

const subjects = [
  "Grades 5–8 Math",
  "High School Algebra",
  "Geometry",
  "Statistics",
  "College Algebra",
  "ACT Math Prep",
  "SAT Math Prep",
];

const pricingTiers = [
  {
    name: "Single Session",
    price: "$50",
    duration: "1 hour",
    features: ["One-on-one instruction", "Customized lesson plan", "Online or in-person"],
  },
  {
    name: "Weekly Package",
    price: "$180",
    duration: "4 sessions/month",
    features: ["Weekly one-hour sessions", "Progress tracking", "Homework support", "Priority scheduling"],
    popular: true,
  },
  {
    name: "Test Prep Intensive",
    price: "$350",
    duration: "8 sessions",
    features: ["ACT/SAT focused", "Practice tests included", "Score improvement guarantee", "Flexible scheduling"],
  },
];

export default function TutoringPage() {
  return (
    <>
      <HeroSection
        title="Math Tutoring"
        subtitle="Expert instruction from grade school through college. Build confidence, improve grades, and master math."
      />

      {/* Subjects */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-8">
            Subjects We Cover
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {subjects.map((subject) => (
              <span
                key={subject}
                className="bg-navy text-white px-5 py-2 rounded-full text-sm font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">Available <span className="font-semibold text-navy">Online</span> and <span className="font-semibold text-navy">In-Person</span> in the Greater New Orleans area.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white p-6 rounded-xl shadow-sm border-2 ${
                  tier.popular ? "border-gold" : "border-gray-100"
                } relative`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-serif font-bold text-navy mb-1">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{tier.duration}</p>
                <p className="text-3xl font-bold text-gold mb-4">{tier.price}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-gold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="block text-center bg-gold text-navy py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            * Prices are placeholder estimates. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Schedule a Session
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ready to improve your math skills? Get in touch to schedule your first session.
          </p>
          <ContactForm subject="Tutoring Inquiry" />
        </div>
      </section>
    </>
  );
}
