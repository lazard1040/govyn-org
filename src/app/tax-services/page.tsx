import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "Individual Returns",
    description: "Complete personal tax preparation with maximum refund strategies.",
  },
  {
    title: "Self-Employed",
    description: "Specialized filing for freelancers, gig workers, and independent contractors.",
  },
  {
    title: "Small Businesses",
    description: "Business tax returns, deductions, and compliance for LLCs and sole proprietors.",
  },
  {
    title: "Amended Returns",
    description: "Corrections to previously filed returns to claim missed deductions or fix errors.",
  },
  {
    title: "Tax Planning",
    description: "Year-round strategic planning to minimize tax liability and maximize savings.",
  },
];

const process = [
  { step: "1", title: "Schedule", description: "Book your appointment online or by phone." },
  { step: "2", title: "Gather Documents", description: "We'll send you a checklist of what to bring." },
  { step: "3", title: "Preparation", description: "We prepare your return with accuracy and care." },
  { step: "4", title: "Review & File", description: "Review together, approve, and file electronically." },
];

export default function TaxServicesPage() {
  return (
    <>
      <HeroSection
        title="Tax Services"
        subtitle="Professional tax preparation and planning for individuals, self-employed workers, and small businesses."
      />

      {/* Pricing */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-8">
            Pricing
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <h3 className="text-2xl font-serif font-bold text-navy mb-2">Tax Preparation</h3>
            <p className="text-4xl font-bold text-gold mb-4">$400 <span className="text-lg font-normal text-gray-500">flat rate</span></p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold text-navy">$100 deposit required</span> to reserve your appointment — remaining $300 due at completion.
            </p>
            <a
              href="/contact?subject=Book+Tax+Appointment"
              className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Book Tax Appointment — $400 ($100 deposit today)
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-serif font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ready to get started? Fill out the form below and we&apos;ll be in touch.
          </p>
          <ContactForm subject="Tax Services Inquiry" />
        </div>
      </section>
    </>
  );
}
