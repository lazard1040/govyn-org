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
    name: "K-12 Tutoring (All Subjects)",
    price: "$20/hour",
    features: [
      "All subjects through 12th grade",
      "Math, Science, English, History, and more",
      "Online and In-Person available",
    ],
  },
  {
    name: "College Tutoring",
    price: "$30/hour",
    features: [
      "Business courses, Accounting, and all Math subjects",
      "Undergraduate level",
      "Online and In-Person available",
    ],
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100"
              >
                <h3 className="text-xl font-serif font-bold text-navy mb-1">{tier.name}</h3>
                <p className="text-3xl font-bold text-gold mb-4">{tier.price}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-gold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact?subject=Tutoring+Session+Booking"
                  className="block text-center bg-gold text-navy py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  Book a Session
                </a>
              </div>
            ))}
          </div>
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
