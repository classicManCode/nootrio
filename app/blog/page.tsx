import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Nootrio | Nutrition Tips & Healthy Eating Insights",
  description:
    "Discover practical nutrition tips, healthy eating guides, and expert advice on making better food choices. Learn about filling breakfasts, budget-friendly meals, and smart snacking.",
  keywords:
    "nutrition blog, healthy eating tips, budget meals, breakfast ideas, healthy snacks, nutrition advice",
  openGraph: {
    title: "Blog - Nootrio | Nutrition Tips & Healthy Eating Insights",
    description: "Discover practical nutrition tips and healthy eating guides",
    type: "website",
  },
};

const blogPosts = [
  {
    id: "5-filling-breakfast-ideas",
    title: "5 Filling Breakfast Ideas",
    excerpt:
      "Easy breakfast ideas using normal foods that help people stay full till later in the day.",
    image: "/images/blog-1.jpg",
    date: "December 1, 2024",
    readTime: "5 min read",
    category: "Breakfast",
  },
  {
    id: "healthy-eating-on-a-budget",
    title: "Healthy Eating on a Budget",
    excerpt:
      "Helping people pick snacks that do not spike their sugar and make them feel lazy or guilty.",
    image: "/images/blog-2.jpg",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Budget Tips",
  },
  {
    id: "better-snack-choices",
    title: "Better Snack Choices",
    excerpt:
      "Show people they do not need expensive fitness foods to eat healthy.",
    image: "/images/blog-3.jpg",
    date: "November 25, 2024",
    readTime: "4 min read",
    category: "Snacks",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-16 md:py-24 lg:py-32">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
          <div className="max-w-3xl">
            <div className="border border-white/20 py-2 px-4 rounded-full w-fit bg-white/10 mb-6">
              <span className="text-sm md:text-base">Blog</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Nutrition Tips & Healthy Eating Insights
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/80">
              Discover practical advice, simple guides, and expert tips to help
              you make better food choices and build healthier eating habits.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col gap-4 border border-black/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-3 md:gap-4 p-4 md:p-6">
                  <div className="flex items-center gap-3 text-xs md:text-sm text-black/60">
                    <span className="bg-green-800/10 text-green-800 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl md:text-2xl font-semibold text-black hover:text-green-800 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm md:text-base text-black/70 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-green-800 font-medium hover:gap-3 transition-all text-sm md:text-base group"
                  >
                    <span>Read more</span>
                    <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-800/5 py-12 md:py-16 lg:py-20">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4">
            Ready to start your health journey?
          </h2>
          <p className="text-base md:text-lg text-black/70 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get personalized nutrition advice and support tailored to your
            lifestyle and goals.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-green-800 hover:bg-green-900 text-white gap-2 hover:gap-3 py-3 px-6 md:px-8 hover:-translate-y-0.5 transition-all duration-500 font-semibold rounded-full text-sm md:text-base"
          >
            <span>Contact Us</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </section>
    </main>
  );
}
