"use client";

import HeroSection from "@/components/HeroSection";
import { useState } from "react";

const topics = [
  {
    title: "Education",
    description: "The power of education to transform lives. Strategies for academic success and lifelong learning.",
    icon: "🎓",
  },
  {
    title: "Financial Literacy",
    description: "Building wealth, understanding money, and creating financial freedom for families and individuals.",
    icon: "💵",
  },
  {
    title: "Entrepreneurship",
    description: "From idea to execution — the real journey of building a business from the ground up.",
    icon: "🚀",
  },
  {
    title: "Motivation",
    description: "Overcoming obstacles, staying focused on your goals, and believing in your potential.",
    icon: "🔥",
  },
  {
    title: "Leadership",
    description: "Developing leadership qualities that inspire teams and create lasting impact in communities.",
    icon: "👑",
  },
];

export default function SpeakingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventDate: "",
    eventType: "",
    audience: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your speaking request! We will review and get back to you soon.");
    setFormData({ name: "", email: "", organization: "", eventDate: "", eventType: "", audience: "", topic: "", message: "" });
  };

  return (
    <>
      <HeroSection
        title="Speaking Engagements"
        subtitle="Inspiring audiences with powerful messages on education, finance, entrepreneurship, and leadership."
      />

      {/* Topics */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-12">
            Speaking Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{topic.icon}</div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2">{topic.title}</h3>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 md:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy text-center mb-4">
            Request a Speaker
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Interested in having Gregory speak at your event? Fill out the form below.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Name</label>
                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">Email</label>
                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-navy mb-1">Organization</label>
              <input type="text" id="organization" value={formData.organization} onChange={(e) => setFormData({ ...formData, organization: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-navy mb-1">Event Date</label>
                <input type="date" id="eventDate" value={formData.eventDate} onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
              </div>
              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-navy mb-1">Event Type</label>
                <input type="text" id="eventType" placeholder="Conference, School, Workshop..." value={formData.eventType} onChange={(e) => setFormData({ ...formData, eventType: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
              </div>
            </div>
            <div>
              <label htmlFor="audience" className="block text-sm font-medium text-navy mb-1">Expected Audience Size</label>
              <input type="text" id="audience" value={formData.audience} onChange={(e) => setFormData({ ...formData, audience: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none" />
            </div>
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-navy mb-1">Preferred Topic</label>
              <select id="topic" value={formData.topic} onChange={(e) => setFormData({ ...formData, topic: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none">
                <option value="">Select a topic...</option>
                <option value="education">Education</option>
                <option value="financial-literacy">Financial Literacy</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="motivation">Motivation</option>
                <option value="leadership">Leadership</option>
                <option value="custom">Custom Topic</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">Additional Details</label>
              <textarea id="message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none" />
            </div>
            <button type="submit" className="w-full bg-gold text-navy py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200">
              Submit Speaking Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
