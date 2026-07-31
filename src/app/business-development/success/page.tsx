import Link from "next/link";

export const metadata = {
  title: "Order Confirmed | VYNCO",
};

export default function SuccessPage() {
  return (
    <section className="bg-navy text-white min-h-[60vh] flex items-center justify-center py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-4">
          Thank you for your order!
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Gregory will be in touch within 24 hours at{" "}
          <a
            href="mailto:lazardlegacyent@govyn.org"
            className="text-gold hover:underline"
          >
            lazardlegacyent@govyn.org
          </a>
        </p>
        <Link
          href="/"
          className="inline-block bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
