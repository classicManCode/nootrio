import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Filling Breakfast Ideas | Nootrio Nutrition Blog",
  description:
    "Discover 5 simple and filling breakfast ideas using everyday foods that keep you satisfied until lunch. Learn how to start your day with nutritious, energy-boosting meals.",
  keywords:
    "filling breakfast ideas, healthy breakfast, nutritious breakfast, breakfast recipes, morning meals, energy breakfast",
  openGraph: {
    title: "5 Filling Breakfast Ideas | Nootrio",
    description:
      "Simple breakfast ideas that keep you full and energized all morning",
    type: "article",
  },
};

export default function BreakfastIdeasPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <article className="w-full">
        <header className="bg-emerald-900 text-white py-12 md:py-16 lg:py-20">
          <div className="w-[90%] md:w-[85%] lg:w-[70%] max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 text-sm md:text-base transition-colors"
            >
              <FaArrowLeft />
              <span>Back to Blog</span>
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6 text-xs md:text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                Breakfast
              </span>
              <span className="text-white/70">December 1, 2024</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">5 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              5 Filling Breakfast Ideas
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Easy breakfast ideas using normal foods that help people stay full
              till later in the day.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
          <Image
            src="/images/blog-1.jpg"
            alt="Healthy breakfast spread with various nutritious options"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <div className="w-[90%] md:w-[85%] lg:w-[70%] max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
          <div className="prose prose-lg max-w-none">
            <section className="mb-8 md:mb-12">
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                Starting your day with a filling breakfast is one of the best
                ways to maintain energy levels, improve focus, and avoid
                mid-morning hunger pangs. The key is choosing foods that combine
                protein, fiber, and healthy fats to keep you satisfied until
                lunch.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                Here are five simple, nutritious breakfast ideas that use
                everyday ingredients you probably already have in your kitchen.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                1. Greek Yogurt Parfait with Nuts and Berries
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Layer Greek yogurt with fresh or frozen berries, a handful of
                nuts (almonds, walnuts, or pecans), and a drizzle of honey.
                Greek yogurt is packed with protein (about 15-20g per serving),
                while the nuts provide healthy fats and the berries offer fiber
                and antioxidants.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Why it works:</strong> The combination of protein and
                healthy fats slows digestion, keeping you full for hours. Plus,
                it takes less than 5 minutes to prepare!
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                2. Oatmeal with Peanut Butter and Banana
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Cook your oats with milk or water, then stir in a tablespoon of
                peanut butter and top with sliced banana. Oats are rich in
                soluble fiber, which helps you feel full, while peanut butter
                adds protein and healthy fats.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Pro tip:</strong> Use steel-cut or rolled oats instead
                of instant oats for better blood sugar control and
                longer-lasting fullness.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                3. Scrambled Eggs with Whole Grain Toast and Avocado
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Scramble 2-3 eggs and serve with whole grain toast topped with
                mashed avocado. Eggs are an excellent source of high-quality
                protein, while avocado provides heart-healthy monounsaturated
                fats and fiber.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Bonus:</strong> Add some spinach or tomatoes to your
                scrambled eggs for extra vitamins and minerals without adding
                many calories.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                4. Smoothie Bowl with Seeds and Granola
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Blend frozen fruit, Greek yogurt or protein powder, and a splash
                of milk to create a thick smoothie base. Pour into a bowl and
                top with chia seeds, flax seeds, granola, and fresh fruit.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Why it works:</strong> The thickness of a smoothie bowl
                makes you eat it more slowly with a spoon, which helps with
                satiety. The seeds add omega-3s and extra fiber.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                5. Cottage Cheese with Fruit and Whole Grain Crackers
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Cottage cheese is incredibly high in protein (about 25g per cup)
                and pairs wonderfully with fresh fruit like pineapple, peaches,
                or berries. Add some whole grain crackers on the side for
                complex carbohydrates.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Quick tip:</strong> Choose low-fat or full-fat cottage
                cheese based on your dietary preferences—both are nutritious
                options.
              </p>
            </section>

            <section className="mb-8 md:mb-12 bg-green-800/5 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                The Science of Staying Full
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                What makes these breakfasts so filling? It all comes down to
                three key nutrients:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-black/80 ml-4">
                <li>
                  <strong>Protein:</strong> Takes longer to digest and helps
                  maintain muscle mass
                </li>
                <li>
                  <strong>Fiber:</strong> Slows digestion and promotes feelings
                  of fullness
                </li>
                <li>
                  <strong>Healthy Fats:</strong> Provide sustained energy and
                  help absorb vitamins
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Final Thoughts
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                You do not need expensive superfoods or complicated recipes to
                have a filling, nutritious breakfast. These five ideas use
                simple, affordable ingredients that you can find at any grocery
                store.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                The key is to include a balance of protein, fiber, and healthy
                fats in your morning meal. Experiment with these ideas and find
                what works best for your taste preferences and schedule. Your
                body—and your productivity—will thank you!
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-emerald-900 text-white rounded-2xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Want personalized nutrition advice?
            </h3>
            <p className="text-white/90 mb-6">
              Get expert guidance tailored to your lifestyle, goals, and dietary
              preferences.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-white hover:bg-green-800 hover:text-white text-emerald-900 gap-2 hover:gap-3 py-3 px-6 transition-all duration-500 font-semibold rounded-full text-sm md:text-base"
            >
              <span>Book a Consultation</span>
              <MdOutlineArrowOutward className="text-lg md:text-xl" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="mt-12 md:mt-16 pt-8 border-t border-black/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-green-800 hover:gap-3 transition-all font-medium"
            >
              <FaArrowLeft />
              <span>Back to all posts</span>
            </Link>
          </nav>
        </div>
      </article>
    </main>
  );
}
