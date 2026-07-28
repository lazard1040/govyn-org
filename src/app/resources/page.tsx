"use client";

import HeroSection from "@/components/HeroSection";
import { useState } from "react";

const resources = [
  {
    title: "Monthly Budget Worksheet",
    description: "Track your income and expenses with this easy-to-use monthly budget template.",
    icon: "💰",
    format: "PDF",
  },
  {
    title: "Tax Preparation Checklist",
    description: "Everything you need to gather before your tax appointment. Never miss a deduction again.",
    icon: "✅",
    format: "PDF",
  },
  {
    title: "Study Planner",
    description: "Organize your study schedule, set goals, and track your progress throughout the semester.",
    icon: "📝",
    format: "PDF",
  },
  {
    title: "Goal Tracker",
    description: "Set SMART goals and track your progress with this printable goal-setting worksheet.",
    icon: "🎯",
    format: "PDF",
  },
  {
    title: "Reading List",
    description: "Curated list of books on finance, entrepreneurship, self-improvement, and education.",
    icon: "📚",
    format: "PDF",
  },
];

export default function ResourcesPage() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! You'll receive free resources in your inbox soon.");
    setEmail("");
  };

  return (
    <>
      <HeroSection
        title="Free Resources"
        subtitle="Downloadable tools to support your education, finances, and personal growth."
      />

      {/* Downloads */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-3">{resource.icon}</div>
                <h3 className="text-lg font-serif font-bold text-navy mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 uppercase font-medium">{resource.format}</span>
                  <a
                    href="#"
                    className="bg-gold text-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-16 md:py-20 bg-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gold mb-4">
            Get Free Resources Delivered to Your Inbox
          </h2>
          <p className="text-gray-300 mb-8">
            Sign up and receive our complete resource library plus new materials as they&apos;re released.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 outline-none focus:ring-2 focus:ring-gold"
            />
            <button
              type="submit"
              className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
