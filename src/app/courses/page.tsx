"use client";

import { useState } from "react";

type CourseType = "FULL COURSE" | "SHORT PRACTICE";
type Category =
  | "Elementary"
  | "Middle School"
  | "Pre-Algebra & Algebra I"
  | "High School"
  | "ACT/SAT Prep"
  | "GED Math"
  | "College Math"
  | "Financial Math"
  | "Bundles";

interface Course {
  title: string;
  type: CourseType;
  duration: string;
  price: number;
  description: string;
  category: Category;
}

interface Bundle {
  title: string;
  price: number;
  description: string;
  category: "Bundles";
}

const courses: Course[] = [
  // ELEMENTARY
  { title: "3rd–4th Grade Math Complete", type: "FULL COURSE", duration: "60 min", price: 49.99, description: "Master addition, subtraction, multiplication, division, fractions, and basic geometry. Aligned with Louisiana LEAP 2025 standards.", category: "Elementary" },
  { title: "Addition & Subtraction Practice", type: "SHORT PRACTICE", duration: "20 min", price: 12.49, description: "Quick drill session covering addition and subtraction with whole numbers. Perfect for grade 3-4 test preparation.", category: "Elementary" },
  { title: "Multiplication Tables Mastery", type: "SHORT PRACTICE", duration: "15 min", price: 12.49, description: "Master all multiplication tables from 1–12 with proven memory techniques. Build the foundation for all future math success.", category: "Elementary" },
  // MIDDLE SCHOOL
  { title: "5th–8th Grade Math Complete", type: "FULL COURSE", duration: "80 min", price: 62.49, description: "Complete coverage of fractions, decimals, ratios, integers, expressions, and equations. Aligned with Louisiana LEAP 2025.", category: "Middle School" },
  { title: "Fractions Made Easy", type: "SHORT PRACTICE", duration: "25 min", price: 17.49, description: "Simplify, add, subtract, multiply, and divide fractions with confidence. One of the most requested topics by parents.", category: "Middle School" },
  { title: "Decimals & Percentages", type: "SHORT PRACTICE", duration: "20 min", price: 17.49, description: "Master decimals and percentages with real-world examples and practice problems.", category: "Middle School" },
  // PRE-ALGEBRA & ALGEBRA I
  { title: "Algebra I Bootcamp Complete", type: "FULL COURSE", duration: "150 min", price: 87.49, description: "The complete Algebra I experience — expressions, equations, inequalities, functions, and graphing. Matches Louisiana EOC standards.", category: "Pre-Algebra & Algebra I" },
  { title: "Intro to Algebra", type: "SHORT PRACTICE", duration: "30 min", price: 19.99, description: "Your first step into algebra — variables, expressions, and simple equations explained simply.", category: "Pre-Algebra & Algebra I" },
  { title: "Solving Equations Practice", type: "SHORT PRACTICE", duration: "25 min", price: 19.99, description: "Master one-step, two-step, and multi-step equations with guided practice problems.", category: "Pre-Algebra & Algebra I" },
  // HIGH SCHOOL
  { title: "Geometry Complete Course", type: "FULL COURSE", duration: "150 min", price: 87.49, description: "Comprehensive geometry covering proofs, triangles, circles, area, volume, and coordinate geometry. Louisiana EOC aligned.", category: "High School" },
  { title: "Geometry Basics Practice", type: "SHORT PRACTICE", duration: "30 min", price: 19.99, description: "Master the essential geometry concepts — angles, triangles, and the Pythagorean theorem.", category: "High School" },
  { title: "Statistics & Probability", type: "SHORT PRACTICE", duration: "30 min", price: 19.99, description: "Understand mean, median, mode, range, and basic probability with real-world examples.", category: "High School" },
  // ACT/SAT PREP
  { title: "ACT Math Complete Prep", type: "FULL COURSE", duration: "60 min", price: 99.99, description: "Complete ACT math preparation covering all tested topics — algebra, geometry, trigonometry, and statistics. Includes test strategies.", category: "ACT/SAT Prep" },
  { title: "ACT Math Quick Drill", type: "SHORT PRACTICE", duration: "30 min", price: 24.99, description: "Fast-paced review of the most commonly tested ACT math concepts. Sharpen your skills before test day.", category: "ACT/SAT Prep" },
  // GED MATH
  { title: "GED Math Complete Prep", type: "FULL COURSE", duration: "115 min", price: 112.49, description: "Full GED math preparation covering all tested areas — arithmetic, algebra, geometry, and data analysis. Build your path to a better future.", category: "GED Math" },
  { title: "GED Math Essentials", type: "SHORT PRACTICE", duration: "30 min", price: 24.99, description: "Focus on the GED math topics most students struggle with — fractions, equations, and geometry basics.", category: "GED Math" },
  // COLLEGE MATH
  { title: "College Algebra Bootcamp", type: "FULL COURSE", duration: "120 min", price: 124.99, description: "Comprehensive college algebra covering functions, polynomials, systems of equations, exponentials, and logarithms.", category: "College Math" },
  { title: "College Algebra Quick Start", type: "SHORT PRACTICE", duration: "30 min", price: 24.99, description: "Get a head start on college algebra with a focused review of the most important foundational concepts.", category: "College Math" },
  // FINANCIAL MATH
  { title: "Financial Literacy Math", type: "FULL COURSE", duration: "90 min", price: 74.99, description: "Real-world math for real life — budgeting, interest, taxes, investing, and credit scores explained clearly for all ages.", category: "Financial Math" },
  { title: "Personal Finance Math Basics", type: "SHORT PRACTICE", duration: "25 min", price: 19.99, description: "A quick but powerful introduction to the math behind budgeting, percentages, and compound interest.", category: "Financial Math" },
];

const bundles: Bundle[] = [
  { title: "All Short Courses Bundle", price: 124.99, description: "Get all 10 short practice courses in one package. Practice every topic at your own pace.", category: "Bundles" },
  { title: "Full Course Complete Library", price: 374.99, description: "Access every full-length course in the Lazard Legacy Math Academy. The ultimate math education package.", category: "Bundles" },
  { title: "Elementary Full Pack", price: 62.49, description: "Both elementary courses bundled together for young learners.", category: "Bundles" },
  { title: "High School Full Pack", price: 149.99, description: "All high school and ACT/SAT courses bundled for serious students.", category: "Bundles" },
];

const categories: Category[] = [
  "Elementary",
  "Middle School",
  "Pre-Algebra & Algebra I",
  "High School",
  "ACT/SAT Prep",
  "GED Math",
  "College Math",
  "Financial Math",
  "Bundles",
];

const categoryAges: Record<Category, string> = {
  "Elementary": "Ages 8–10",
  "Middle School": "Ages 11–13",
  "Pre-Algebra & Algebra I": "Ages 12–15",
  "High School": "Ages 15–18",
  "ACT/SAT Prep": "High School",
  "GED Math": "Adults",
  "College Math": "College",
  "Financial Math": "All Ages",
  "Bundles": "Best Value",
};

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Elementary");
  const [selectedCourse, setSelectedCourse] = useState<{ title: string; price: number } | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });
  const [loading, setLoading] = useState(false);

  const handleEnroll = (title: string, price: number) => {
    setSelectedCourse({ title, price });
    setFormData({ name: "", email: "", phone: "", notes: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCourse) return;
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName: selectedCourse.title,
          price: selectedCourse.price,
          quantity: 1,
          customerEmail: formData.email,
          notes: `Name: ${formData.name}. Phone: ${formData.phone || "N/A"}. ${formData.notes}`,
          successUrl: "/courses/success",
          cancelUrl: "/courses",
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

  const filteredCourses = courses.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-gold mb-4">
            Lazard Legacy Math Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Professional math courses for all ages — from 3rd grade through college. Taught by Gregory Lazard Jr., New Orleans educator and math specialist.
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Choose a full-length course or a short practice session. All courses include downloadable materials and a certificate of completion.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-navy text-gold"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-2">
              {activeCategory}
            </h2>
            <p className="text-gray-600">{categoryAges[activeCategory]}</p>
          </div>

          {activeCategory === "Bundles" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {bundles.map((bundle) => (
                <div
                  key={bundle.title}
                  className="bg-white border-2 border-gold rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Best Value
                  </span>
                  <h3 className="text-xl font-serif font-bold text-navy mb-2 pr-24">
                    {bundle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
                  <p className="text-2xl font-bold text-gold mb-4">${bundle.price}</p>
                  <button
                    onClick={() => handleEnroll(bundle.title, bundle.price)}
                    className="w-full bg-gold text-navy px-4 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.title}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full uppercase ${
                        course.type === "FULL COURSE"
                          ? "bg-gold/20 text-gold"
                          : "bg-navy/10 text-navy"
                      }`}
                    >
                      {course.type}
                    </span>
                    <span className="text-xs text-gray-500">{course.duration}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-navy mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{course.description}</p>
                  <p className="text-2xl font-bold text-gold mb-4">${course.price}</p>
                  <button
                    onClick={() => handleEnroll(course.title, course.price)}
                    className="w-full bg-gold text-navy px-4 py-2.5 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200"
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Order Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8 relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-2xl font-serif font-bold text-navy mb-1">
              Enroll Now
            </h3>
            <p className="text-gray-600 mb-6">
              {selectedCourse.title} — <span className="text-gold font-bold">${selectedCourse.price}</span>
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
                  Notes <span className="text-gray-400">(optional)</span>
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none"
                  placeholder="Any questions or special requests"
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
