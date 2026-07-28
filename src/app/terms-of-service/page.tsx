import HeroSection from "@/components/HeroSection";

export default function TermsOfServicePage() {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Please read these terms carefully"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              <strong>Effective Date:</strong> July 2026
            </p>

            <p className="text-gray-700 mb-6">
              Welcome to www.vynco.org, operated by Lazard Legacy Enterprises LLC
              (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using
              this website, you agree to be bound by the following Terms of Service. If you do not
              agree to these terms, please do not use our website or services.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 mb-6">
              By using this website, you acknowledge that you have read, understood, and agree to
              be bound by these Terms of Service and our Privacy Policy. We reserve the right to
              update these terms at any time. Continued use of the site after changes are posted
              constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Services Offered
            </h2>
            <p className="text-gray-700 mb-4">
              Lazard Legacy Enterprises LLC provides the following services through its brand
              divisions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Math tutoring and academic support (VYNCO Education)</li>
              <li>Tax preparation and financial services (VYNCO Tax)</li>
              <li>Business consulting and startup guidance (VYNCO Consulting)</li>
              <li>Publishing and authored works (VYNCO Books)</li>
              <li>Motivational and professional speaking engagements (VYNCO Speaking)</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Service availability, pricing, and scheduling are subject to change. Specific service
              agreements will be provided upon engagement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Payment Terms
            </h2>
            <p className="text-gray-700 mb-6">
              Payment terms, including rates, due dates, and accepted methods of payment, will be
              communicated and agreed upon prior to the start of any service engagement. All fees
              are non-refundable unless otherwise stated in a separate written agreement.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 mb-6">
              All content on this website — including text, images, graphics, logos, page layouts,
              published works, educational materials, and brand elements — is the intellectual
              property of Gregory Lazard Jr. and Lazard Legacy Enterprises LLC unless otherwise
              noted. You may not copy, reproduce, distribute, or create derivative works from any
              content on this site without prior written permission.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              User Conduct
            </h2>
            <p className="text-gray-700 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Use the site for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Interfere with the proper operation of the site</li>
              <li>Submit false or misleading information through our forms</li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 mb-6">
              Lazard Legacy Enterprises LLC and Gregory Lazard Jr. shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of this website or our services. Our total liability for any claim related to our
              services shall not exceed the amount you paid for the specific service giving rise to
              the claim. This website and its content are provided &ldquo;as is&rdquo; without
              warranties of any kind, either express or implied.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the State of Louisiana, without regard to its conflict of law provisions. Any
              disputes arising from these terms or your use of our services shall be resolved in the
              courts of the State of Louisiana.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Contact for Disputes
            </h2>
            <p className="text-gray-700 mb-2">
              If you have any questions, concerns, or disputes regarding these Terms of Service,
              please contact us before pursuing any legal action:
            </p>
            <div className="bg-light-gray p-6 rounded-xl mt-4">
              <p className="text-gray-700 font-semibold">Lazard Legacy Enterprises LLC</p>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:lazardgregory@icloud.com" className="text-gold hover:underline">
                  lazardgregory@icloud.com
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
