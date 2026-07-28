import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    title: "LLC Formation Guidance",
    description: "Step-by-step guidance through the process of forming your LLC, including state registration, EIN, and operating agreements.",
    icon: "🏢",
  },
  {
    title: "Startup Planning",
    description: "Develop a solid business plan, identify your market, and create a roadmap for your first year of business.",
    icon: "🚀",
  },
  {
    title: "Business Budgeting",
    description: "Create a realistic budget, manage cash flow, and set financial goals that keep your business on track.",
    icon: "💰",
  },
  {
    title: "Branding",
    description: "Define your brand identity, messaging, and visual presence to stand out in your market.",
    icon: "🎨",
  },
  {
    title: "Entrepreneur Coaching",
    description: "One-on-one coaching sessions to help you overcome challenges, stay focused, and grow your business.",
    icon: "🎯",
  },
];

const process = [
  { step: "1", title: "Discovery Call", description: "We learn about your goals, challenges, and vision for your business." },
  { step: "2", title: "Custom Plan", description: "We create a tailored action plan with clear steps and milestones." },
  { step: "3", title: "Implementation", description: "We work together to execute the plan and build your business." },
  { step: "4", title: "Ongoing Support", description: "Continued guidance as your business grows and evolves." },
];

export default function ConsultingPage() {
  return (
    <>
      <HeroSection
        title="Business Consulting"
        subtitle="From idea to launch and beyond. Expert guidance for aspiring and growing entrepreneurs."
      />

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            How We Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-light-gray">
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
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Start Your Consultation
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Ready to build your business? Let&apos;s talk about your goals.
          </p>
          <ContactForm subject="Business Consulting Inquiry" />
        </div>
      </section>
    </>
  );
}
