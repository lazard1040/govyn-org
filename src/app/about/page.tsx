import HeroSection from "@/components/HeroSection";

const divisions = [
  { name: "VYNCO Education", description: "Math tutoring and academic support for students of all levels." },
  { name: "VYNCO Tax", description: "Professional tax preparation and financial planning services." },
  { name: "VYNCO Books", description: "Publishing arm for poetry, educational materials, and music literature." },
  { name: "VYNCO Consulting", description: "Business formation, startup guidance, and entrepreneur coaching." },
  { name: "VYNCO Speaking", description: "Motivational speaking on education, finance, and leadership." },
  { name: "VYNCO Media", description: "Content creation, social media, and brand storytelling." },
  { name: "VYNCO Foundation", description: "Community initiatives and giving back to New Orleans families." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Gregory Lazard Jr."
        subtitle="Founder & CEO of Lazard Legacy Enterprises"
      />

      {/* Bio */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-light-gray p-8 rounded-2xl mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/gregory-lazard-jr.png"
                    alt="Gregory Lazard Jr. — Founder & CEO of Lazard Legacy Enterprises"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy mb-2">Gregory Lazard Jr.</h2>
                  <p className="text-gold font-semibold mb-2">
                    Math Specialist • Tax Professional • Published Author • Business Consultant
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    &ldquo;Dreams can come true. Better late than never.&rdquo;
                  </p>
                  <div className="flex gap-3 mt-4">
                    <a
                      href="https://www.instagram.com/imwayfresha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-gold hover:text-navy transition-colors group"
                    >
                      <svg className="w-5 h-5 text-navy group-hover:text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                      <span className="text-sm font-medium">@imwayfresha</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@imwayfresha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-gold hover:text-navy transition-colors group"
                    >
                      <svg className="w-5 h-5 text-navy group-hover:text-navy" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.88 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .56.04.82.11v-3.5a6.37 6.37 0 0 0-.82-.05A6.34 6.34 0 0 0 3.15 15.7 6.34 6.34 0 0 0 9.49 22a6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.01-.49z"/>
                      </svg>
                      <span className="text-sm font-medium">@imwayfresha</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Gregory Lazard Jr. is a native of New Orleans, Louisiana, and a proud graduate of
              Saint Augustine High School and Southern University at New Orleans (SUNO). With a
              deep passion for education, financial empowerment, and community development,
              Gregory founded Lazard Legacy Enterprises to create pathways for individuals and
              families to achieve lasting success.
            </p>
            <p className="text-gray-700 mb-4">
              As a Math Specialist, Gregory provides expert tutoring services for students from
              grade school through college, specializing in ACT/SAT preparation, algebra,
              geometry, and statistics. His patient, results-driven approach has helped countless
              students overcome math anxiety and achieve their academic goals.
            </p>
            <p className="text-gray-700 mb-4">
              As a Tax Professional, he helps individuals, self-employed workers, and small
              business owners navigate the complexities of tax preparation and financial planning,
              ensuring they maximize their returns and build strong financial foundations.
            </p>
            <p className="text-gray-700 mb-4">
              Gregory is also a Published Author, with works including the poetry collection
              &ldquo;Laugh Now, Cry Later&rdquo; and the R&B Bible Series — a five-volume
              exploration of music history and culture. His writing reflects his deep connection
              to New Orleans culture, life, and the human experience.
            </p>
            <p className="text-gray-700 mb-8">
              As a Business Consultant, Gregory guides aspiring entrepreneurs through every stage
              of building a business — from LLC formation and startup planning to branding and
              budgeting. He is dedicated to helping others turn their dreams into reality.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-navy text-white p-8 rounded-2xl mb-12">
            <h3 className="text-2xl font-serif font-bold text-gold mb-4">Our Mission</h3>
            <p className="text-gray-300 text-lg">
              To empower individuals, families, and entrepreneurs through education, financial
              services, publishing, and business solutions — building lasting legacies one person
              at a time. We believe that with the right guidance, resources, and support, anyone
              can achieve their dreams and create generational success.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Divisions */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-12">
            Brand Divisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => (
              <div key={div.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-serif font-bold text-navy mb-2">{div.name}</h3>
                <p className="text-gray-600 text-sm">{div.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
