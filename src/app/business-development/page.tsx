"use client";

import { useState } from "react";

interface Product {
  name: string;
  quantity: number;
  price: number;
}

const businessCards: Product[] = [
  { name: "Business Cards", quantity: 20, price: 25 },
  { name: "Business Cards", quantity: 40, price: 45 },
  { name: "Business Cards", quantity: 60, price: 65 },
  { name: "Business Cards", quantity: 80, price: 85 },
  { name: "Business Cards", quantity: 100, price: 100 },
  { name: "Business Cards", quantity: 120, price: 120 },
];

const flyers: Product[] = [
  { name: "Custom Flyers", quantity: 10, price: 30 },
  { name: "Custom Flyers", quantity: 20, price: 55 },
  { name: "Custom Flyers", quantity: 30, price: 75 },
  { name: "Custom Flyers", quantity: 40, price: 90 },
];

export default function BusinessDevelopmentPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: `${selectedProduct.quantity} ${selectedProduct.name}`,
          price: selectedProduct.price,
          quantity: selectedProduct.quantity,
          customerEmail: formData.email,
          notes: `Name: ${formData.name}. Phone: ${formData.phone || "N/A"}. ${formData.notes}`,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-4">
            Custom Business Cards &amp; Flyers
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Professional graphic design by Gregory Lazard Jr. — delivered fast, built to impress.
          </p>
          <p className="text-sm text-gray-400">
            Orders fulfilled within 3–5 business days. Contact:{" "}
            <a href="mailto:lazardlegacyent@govyn.org" className="text-gold hover:underline">
              lazardlegacyent@govyn.org
            </a>
          </p>
        </div>
      </section>

      {/* Business Cards Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy text-center mb-2">
            Business Cards
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Custom designed business cards. Price includes design and printing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessCards.map((product) => (
              <div
                key={`${product.name}-${product.quantity}`}
                className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">🃏</div>
                <h3 className="text-xl font-serif font-bold text-navy mb-1">
                  {product.quantity} Business Cards
                </h3>
                <p className="text-2xl font-bold text-gold mb-4">${product.price}</p>
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-gold text-navy px-4 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flyers Section */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gold text-center mb-2">
            Custom Flyers
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Eye-catching flyers for events, businesses, and promotions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flyers.map((product) => (
              <div
                key={`${product.name}-${product.quantity}`}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">📄</div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  {product.quantity} Flyers
                </h3>
                <p className="text-2xl font-bold text-gold mb-4">${product.price}</p>
                <button
                  onClick={() => handleOrder(product)}
                  className="w-full bg-gold text-navy px-4 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                >
                  Order Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-serif font-bold text-navy mb-1">
              Order Details
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedProduct.quantity} {selectedProduct.name} — <span className="text-gold font-bold">${selectedProduct.price}</span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none"
                  placeholder="(504) 555-0123"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notes / Design Instructions <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none"
                  placeholder="Describe your design — colors, text, logo, etc."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
