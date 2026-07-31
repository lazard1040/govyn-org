import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="Have questions or ready to get started? We'd love to hear from you."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">👤</span>
                  <div>
                    <p className="font-semibold text-navy">Gregory Lazard Jr.</p>
                    <p className="text-gray-600 text-sm">Founder & CEO, Lazard Legacy Enterprises</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a href="mailto:lazardlegacyent@govyn.org" className="text-gold hover:underline">
                      lazardlegacyent@govyn.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <a href="tel:+15045219012" className="text-gold hover:underline">
                      (504) 521-9012
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold text-xl">🌐</span>
                  <div>
                    <p className="font-semibold text-navy">Website</p>
                    <a href="https://www.vynco.org" className="text-gold hover:underline">
                      www.vynco.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.tiktok.com/@imwayfresha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-light-gray px-4 py-2 rounded-lg hover:bg-gold hover:text-navy transition-colors group"
                  >
                    <svg className="w-5 h-5 text-navy group-hover:text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.01-.49z"/>
                    </svg>
                    <span className="text-sm font-medium">@imwayfresha</span>
                  </a>
                  <a
                    href="https://www.instagram.com/imwayfresha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-light-gray px-4 py-2 rounded-lg hover:bg-gold hover:text-navy transition-colors group"
                  >
                    <svg className="w-5 h-5 text-navy group-hover:text-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                    <span className="text-sm font-medium">@imwayfresha</span>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-navy rounded-xl p-6 border border-gold/30">
                <h3 className="text-lg font-semibold text-gold mb-4 flex items-center gap-2">
                  🕗 Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center text-gray-200">
                    <span>Monday – Friday</span>
                    <span className="text-gold font-medium">8:00 AM – 8:00 PM CST</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-200">
                    <span>Saturday</span>
                    <span className="text-gold font-medium">8:00 AM – 8:00 PM CST</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-200">
                    <span>Sunday</span>
                    <span className="text-gold font-medium">By Appointment Only</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 space-y-1 text-sm text-gray-300">
                  <p>⏱ Response time: Within 24 hours</p>
                  <p>
                    📞{" "}
                    <a href="tel:+15045219012" className="hover:text-gold transition-colors">
                      (504) 521-9012
                    </a>
                  </p>
                  <p>
                    ✉️{" "}
                    <a href="mailto:lazardlegacyent@govyn.org" className="hover:text-gold transition-colors">
                      lazardlegacyent@govyn.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
