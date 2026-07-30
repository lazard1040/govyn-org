import HeroSection from "@/components/HeroSection";

const books = [
  {
    title: "Laugh Now, Cry Later",
    author: "Gregory Lazard Jr.",
    description: "A powerful poetry collection exploring New Orleans culture, love, loss, and triumph. Raw, honest, and deeply personal.",
    price: "$14.99",
    status: "available",
    category: "Poetry",
  },
  {
    title: "Future Southern Gentleman",
    author: "Gregory Lazard Jr.",
    description: "A series celebrating Southern values, manhood, and the journey of becoming. Stories and lessons for the next generation.",
    price: "TBA",
    status: "coming-soon",
    category: "Series",
  },
  {
    title: "The Legacy Music Library: R&B Bible Vol. 1",
    author: "Gregory Lazard Jr.",
    description: "Volume 1 of the five-part R&B Bible Series. A deep dive into the origins and golden era of rhythm and blues.",
    price: "$19.99",
    status: "available",
    category: "R&B Bible Series",
  },
  {
    title: "The Legacy Music Library: R&B Bible Vol. 2",
    author: "Gregory Lazard Jr.",
    description: "Volume 2 explores the evolution of R&B through the 1970s and the rise of soul music.",
    price: "$19.99",
    status: "available",
    category: "R&B Bible Series",
  },
  {
    title: "The Legacy Music Library: R&B Bible Vol. 3",
    author: "Gregory Lazard Jr.",
    description: "Volume 3 covers the new jack swing era and the transformation of R&B in the late 80s and 90s.",
    price: "$19.99",
    status: "available",
    category: "R&B Bible Series",
  },
  {
    title: "The Legacy Music Library: R&B Bible Vol. 4",
    author: "Gregory Lazard Jr.",
    description: "Volume 4 examines the 2000s R&B renaissance and the artists who defined a generation.",
    price: "$19.99",
    status: "available",
    category: "R&B Bible Series",
  },
  {
    title: "The Legacy Music Library: R&B Bible Vol. 5",
    author: "Gregory Lazard Jr.",
    description: "Volume 5 brings the series to the modern era — contemporary R&B and where the genre is headed.",
    price: "$19.99",
    status: "available",
    category: "R&B Bible Series",
  },
  {
    title: "Educational Workbooks",
    author: "Gregory Lazard Jr.",
    description: "Math practice workbooks designed to complement tutoring sessions. Covering algebra, geometry, and test prep.",
    price: "TBA",
    status: "coming-soon",
    category: "Education",
  },
  {
    title: "Signed Collector Editions",
    author: "Gregory Lazard Jr.",
    description: "Limited signed copies of all available titles. Perfect for collectors and supporters of independent publishing.",
    price: "Varies",
    status: "available",
    category: "Special",
  },
];

export default function BookstorePage() {
  return (
    <>
      <HeroSection
        title="Bookstore"
        subtitle="Poetry, music history, educational resources, and more — all by Gregory Lazard Jr."
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.title}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-navy to-navy/80 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl">📖</span>
                    <p className="text-gold text-xs mt-2 font-medium">{book.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-navy mb-1">{book.title}</h3>
                  <p className="text-gold text-sm font-medium mb-2">by {book.author}</p>
                  <p className="text-gray-600 text-sm mb-4">{book.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-navy font-bold">{book.price}</span>
                    {book.status === "available" ? (
                      <a
                        href="https://a.co/d/0h87M8Xz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold text-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors"
                      >
                        Buy Now
                      </a>
                    ) : (
                      <span className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm font-semibold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
