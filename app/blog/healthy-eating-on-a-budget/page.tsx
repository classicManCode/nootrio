import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthy Eating on a Budget | Nootrio Nutrition Blog",
  description:
    "Learn how to eat healthy without breaking the bank. Discover budget-friendly nutrition tips, affordable meal ideas, and smart shopping strategies for nutritious eating.",
  keywords:
    "healthy eating on a budget, affordable nutrition, budget meals, cheap healthy food, grocery shopping tips, meal planning",
  openGraph: {
    title: "Healthy Eating on a Budget | Nootrio",
    description: "Practical tips for eating healthy without spending a fortune",
    type: "article",
  },
};

export default function BudgetEatingPost() {
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
                Budget Tips
              </span>
              <span className="text-white/70">November 28, 2024</span>
              <span className="text-white/70">•</span>
              <span className="text-white/70">6 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Healthy Eating on a Budget
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Practical strategies to eat nutritious meals without overspending,
              plus smart shopping tips that save money.
            </p>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full h-64 md:h-96 lg:h-[500px] relative">
          <Image
            src="/images/blog-2.jpg"
            alt="Affordable healthy groceries and meal prep ingredients"
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
                One of the biggest myths about healthy eating is that it has to
                be expensive. While premium organic products and specialty
                health foods can cost more, eating nutritious meals on a budget
                is absolutely possible with the right strategies and planning.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-6">
                The truth is, many of the healthiest foods—like beans, oats,
                eggs, and seasonal vegetables—are also some of the most
                affordable. Let us show you how to make your food budget work
                for your health goals.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Plan Your Meals and Make a List
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Meal planning is your secret weapon for budget-friendly healthy
                eating. Before you shop, plan your meals for the week and create
                a detailed shopping list. This prevents impulse purchases and
                ensures you only buy what you need.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Pro tip:</strong> Check what you already have in your
                pantry, fridge, and freezer before making your list. You might
                be surprised at how many meals you can create with ingredients
                you already own.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Buy Whole Foods and Cook from Scratch
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Pre-packaged and processed foods often cost more per serving
                than whole ingredients. Buying basic ingredients like rice,
                beans, oats, potatoes, and seasonal vegetables is significantly
                cheaper than buying pre-made meals or snacks.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Cooking from scratch also gives you complete control over
                ingredients, allowing you to avoid excess salt, sugar, and
                unhealthy fats commonly found in processed foods.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Budget-friendly staples:</strong> Brown rice, dried
                beans and lentils, oats, eggs, frozen vegetables, canned
                tomatoes, and seasonal fresh produce.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Embrace Plant-Based Proteins
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Meat and fish can be expensive, but plant-based proteins like
                beans, lentils, chickpeas, and tofu are incredibly affordable
                and just as nutritious. A bag of dried beans costs a fraction of
                the price of meat and provides multiple servings of protein and
                fiber.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Try this:</strong> Replace meat with beans or lentils in
                dishes like chili, tacos, pasta sauce, or curry. You will save
                money while boosting your fiber intake.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Buy Seasonal and Local Produce
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Fruits and vegetables are cheapest when they are in season.
                Seasonal produce is more abundant, which drives prices down.
                Visit farmers markets near closing time for even better deals,
                as vendors often discount items to avoid taking them home.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                <strong>Frozen is fine:</strong> Frozen fruits and vegetables
                are just as nutritious as fresh ones and often cheaper. They are
                picked at peak ripeness and frozen immediately, locking in
                nutrients.
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Reduce Food Waste
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Americans waste about 30-40% of the food supply, which means
                money literally going in the trash. Store food properly, use
                leftovers creatively, and freeze items before they spoil.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Vegetable scraps can become stock, overripe bananas can be
                frozen for smoothies, and leftover rice can become fried rice
                the next day. Get creative with what you have!
              </p>
            </section>

            <section className="mb-8 md:mb-12 bg-green-800/5 p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Budget-Friendly Meal Ideas
              </h2>
              <ul className="list-disc list-inside space-y-3 text-base md:text-lg text-black/80 ml-4">
                <li>
                  <strong>Breakfast:</strong> Oatmeal with banana and peanut
                  butter
                </li>
                <li>
                  <strong>Lunch:</strong> Bean and vegetable soup with whole
                  grain bread
                </li>
                <li>
                  <strong>Dinner:</strong> Stir-fried rice with eggs and frozen
                  vegetables
                </li>
                <li>
                  <strong>Snack:</strong> Carrots and hummus, or apple slices
                  with peanut butter
                </li>
              </ul>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Shop Smart: Compare Prices and Use Coupons
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Compare unit prices (price per ounce or pound) rather than
                package prices to find the best deals. Buying in bulk can save
                money on non-perishable items like rice, oats, and dried beans.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                Many grocery stores offer digital coupons through their apps.
                Take a few minutes to browse available coupons before
                shopping—the savings add up quickly!
              </p>
            </section>

            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
                Final Thoughts
              </h2>
              <p className="text-base md:text-lg text-black/80 leading-relaxed mb-4">
                Eating healthy on a budget is not about deprivation or eating
                boring food. It is about being strategic with your shopping,
                cooking more meals at home, and choosing nutrient-dense whole
                foods over expensive processed options.
              </p>
              <p className="text-base md:text-lg text-black/80 leading-relaxed">
                Start with one or two of these strategies and gradually
                incorporate more as they become habits. Your wallet and your
                health will both benefit from these simple changes!
              </p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-emerald-900 text-white rounded-2xl">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Need help creating a budget-friendly meal plan?
            </h3>
            <p className="text-white/90 mb-6">
              Get personalized nutrition guidance that fits your budget and
              lifestyle.
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
