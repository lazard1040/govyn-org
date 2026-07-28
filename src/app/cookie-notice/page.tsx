import HeroSection from "@/components/HeroSection";

export default function CookieNoticePage() {
  return (
    <>
      <HeroSection
        title="Cookie Notice"
        subtitle="How we use cookies on this site"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 text-sm mb-8">
              <strong>Effective Date:</strong> July 2026
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-700 mb-6">
              Cookies are small text files that are placed on your computer or mobile device when
              you visit a website. They are widely used to make websites work more efficiently and
              to provide information to site owners. Cookies help remember your preferences and
              understand how you interact with a site.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Types of Cookies We Use
            </h2>

            <div className="bg-light-gray p-6 rounded-xl mb-6">
              <h3 className="text-lg font-serif font-bold text-navy mb-2">Essential Cookies</h3>
              <p className="text-gray-700">
                These cookies are necessary for the website to function properly. They enable basic
                features like page navigation and access to secure areas of the site. The website
                cannot operate correctly without these cookies.
              </p>
            </div>

            <div className="bg-light-gray p-6 rounded-xl mb-6">
              <h3 className="text-lg font-serif font-bold text-navy mb-2">Analytics Cookies</h3>
              <p className="text-gray-700">
                These cookies help us understand how visitors use our website by collecting
                information about which pages are visited most often, how long visitors stay, and
                how they found us. This data is used to improve the site and provide a better
                experience. All information collected is aggregated and anonymous.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              How to Opt Out
            </h2>
            <p className="text-gray-700 mb-4">
              You can control and manage cookies through your browser settings. Most browsers allow
              you to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>View what cookies are stored on your device and delete them individually</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies from being set</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Please note that blocking or deleting cookies may affect how this website functions.
              Some features may not work as intended if essential cookies are disabled.
            </p>
            <p className="text-gray-700 mb-4">
              To manage cookies in popular browsers, visit:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Settings → Privacy and Security → Cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
              </li>
              <li>
                <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
              </li>
              <li>
                <strong>Edge:</strong> Settings → Cookies and Site Permissions
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Changes to This Notice
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Cookie Notice from time to time. Any changes will be posted on this
              page with an updated effective date.
            </p>

            <h2 className="text-2xl font-serif font-bold text-navy mt-10 mb-4">
              Questions?
            </h2>
            <p className="text-gray-700 mb-2">
              If you have questions about our use of cookies, please contact us:
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
