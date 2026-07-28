import HeroSection from "@/components/HeroSection";

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy matters to us"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              <strong>Effective Date:</strong> July 2026
            </p>

            <p className="text-gray-700 mb-6">
              Lazard Legacy Enterprises LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates the website www.vynco.org. This Privacy Policy explains how we collect, use,
              and protect your personal information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 mb-4">
              We collect information you voluntarily provide through our contact form, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Any message or inquiry details you submit</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Respond to your inquiries and requests</li>
              <li>Provide the services you have requested (tutoring, tax preparation, consulting, etc.)</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and user experience</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              We Do Not Sell Your Data
            </h2>
            <p className="text-gray-700 mb-6">
              We will never sell, rent, or trade your personal information to third parties for
              marketing purposes. Your information is used solely to provide and improve our services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Cookies
            </h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies — small text files stored on your device — to improve
              your browsing experience. These may include essential cookies required for the site
              to function and analytics cookies that help us understand how visitors use the site.
              You can control cookies through your browser settings. For more details, please see
              our <a href="/cookie-notice" className="text-gold hover:underline">Cookie Notice</a>.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Third-Party Links
            </h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices or content of those external sites. We encourage you to review the
              privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Children&rsquo;s Privacy
            </h2>
            <p className="text-gray-700 mb-6">
              Our website is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If we become aware that we have
              inadvertently collected information from a child under 13, we will take steps to
              delete that information promptly. If you believe a child under 13 has provided us
              with personal information, please contact us immediately.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on
              this page with an updated effective date. We encourage you to review this policy
              periodically.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about this Privacy Policy or how your information is handled,
              please contact us:
            </p>
            <div className="bg-light-gray p-6 rounded-xl mt-4">
              <p className="text-gray-700 font-semibold">Lazard Legacy Enterprises LLC</p>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:lazardlegacyent@govyn.org" className="text-gold hover:underline">
                  lazardlegacyent@govyn.org
                </a>
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <a href="tel:+15045219012" className="text-gold hover:underline">
                  (504) 521-9012
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
