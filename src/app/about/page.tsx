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
