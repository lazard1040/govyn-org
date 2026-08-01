import Link from "next/link";

export default function CourseSuccessPage() {
  return (
    <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">🎓</div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
          Thank You for Enrolling!
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Gregory will send your course materials to your email within 24 hours.
        </p>
        <p className="text-gray-400 mb-8">
          Questions?{" "}
          <a
            href="mailto:lazardlegacyent@govyn.org"
            className="text-gold hover:underline"
          >
            lazardlegacyent@govyn.org
          </a>
        </p>
        <Link
          href="/courses"
          className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
        >
          Browse More Courses
        </Link>
      </div>
    </section>
  );
}
